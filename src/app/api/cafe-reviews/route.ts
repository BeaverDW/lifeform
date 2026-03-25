import { NextResponse } from "next/server";

const CAFE_ID = "31679378";
const MENU_ID = "10"; // 렌탈 후기

export async function GET() {
  try {
    const res = await fetch(
      `https://apis.naver.com/cafe-web/cafe2/ArticleListV2.json?search.clubid=${CAFE_ID}&search.menuid=${MENU_ID}&search.perPage=5&search.page=1`,
      {
        headers: {
          Referer: "https://cafe.naver.com/mozipartners",
        },
        next: { revalidate: 600 }, // 10분 캐시
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch" }, { status: 502 });
    }

    const data = await res.json();
    const articles = data.message?.result?.articleList ?? [];

    const reviews = await Promise.all(
      articles.map(
        async (a: {
          articleId: number;
          subject: string;
          writerNickname: string;
          writeDateTimestamp: number;
          readCount: number;
          commentCount: number;
          representImage: string;
        }) => {
          let excerpt = "";
          try {
            const detailRes = await fetch(
              `https://apis.naver.com/cafe-web/cafe-articleapi/v2.1/cafes/${CAFE_ID}/articles/${a.articleId}`,
              { headers: { Referer: "https://cafe.naver.com/mozipartners" } }
            );
            if (detailRes.ok) {
              const detail = await detailRes.json();
              const html = detail.result?.article?.contentHtml ?? "";
              excerpt = html
                .replace(/<[^>]*>/g, "")
                .replace(/&nbsp;/g, " ")
                .replace(/\s+/g, " ")
                .trim()
                .slice(0, 100);
            }
          } catch {}

          return {
            id: a.articleId,
            title: a.subject,
            author: a.writerNickname,
            date: a.writeDateTimestamp,
            readCount: a.readCount,
            commentCount: a.commentCount,
            excerpt,
            thumbnail: a.representImage
              ? a.representImage.replace(/\?type=.*$/, "?type=w300")
              : null,
            url: `https://cafe.naver.com/f-e/cafes/${CAFE_ID}/articles/${a.articleId}`,
          };
        }
      )
    );

    return NextResponse.json(reviews);
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
