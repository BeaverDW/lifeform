"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ScrollReveal from "./ScrollReveal";

interface Review {
  id: number;
  title: string;
  author: string;
  date: number;
  readCount: number;
  commentCount: number;
  excerpt: string;
  thumbnail: string | null;
  url: string;
}

function formatDate(ts: number) {
  const d = new Date(ts);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/cafe-reviews")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setReviews(data);
      })
      .catch(() => {});
  }, []);

  if (reviews.length === 0) return null;

  return (
    <section className="bg-gray-50 px-5 py-12">
      <div className="mx-auto max-w-screen-sm">
        <ScrollReveal>
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-primary text-[1.5rem] font-extrabold">
                고객님들의 후기
              </h2>
              <p className="mt-2 text-sm font-medium text-gray-400">
                생활폼 고객님들의 만족 포인트를 후기로 살펴보세요.
              </p>
            </div>
            <a
              href="https://cafe.naver.com/f-e/cafes/31679378/menus/10?viewType=I"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-medium text-gray-400 underline-offset-2 hover:underline"
            >
              더보기 &gt;
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="basis-4/5 pl-3">
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-xl border bg-white shadow-[0_2px_12px_rgba(11,16,51,0.06)] transition-shadow hover:shadow-[0_4px_16px_rgba(11,16,51,0.1)]"
                  >
                    {review.thumbnail && (
                      <div className="aspect-4/3 w-full overflow-hidden bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/api/image-proxy?url=${encodeURIComponent(review.thumbnail)}`}
                          alt={review.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                          NEW
                        </span>
                        <p className="line-clamp-1 text-sm leading-snug font-bold">
                          {review.title}
                        </p>
                      </div>
                      {review.excerpt && (
                        <p className="line-clamp-2 text-xs leading-relaxed text-gray-500">
                          {review.excerpt}
                        </p>
                      )}
                      <div className="mt-3 flex items-center gap-2 text-[11px] text-gray-400">
                        <span>{review.author}</span>
                        <span>·</span>
                        <span>{formatDate(review.date)}</span>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
