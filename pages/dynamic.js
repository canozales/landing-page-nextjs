import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Dynamic() {
  const ROUTE_POST_ID = 'favorite/[id]';
  const posts = [
    {
      id: 1,
      title: 'Hello Peter 1',
    },
    {
      id: 3,
      title: 'Hello Peter 3',
    },
  ];
  const router = useRouter();

  const navigate = (id, title) => {
    router.push({
      pathname: ROUTE_POST_ID,
      query: { id, title },
    });
  };

  return (
    <>
      <h1>Hello Peter Welcome to my Blog Spiderman</h1>
      {posts.map((post) => (
        <div>
          <button onClick={() => navigate(post.id, post.title)}>
            {post.title}
          </button>
        </div>
      ))}
    </>
  );
}
