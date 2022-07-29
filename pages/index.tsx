import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import Card from "../components/card/card";
import API from "../services/api/api.json";
import { Post } from "../types/post";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    const fetchAPI = async () => {
      await axios.get(`${API.baseURL}/data`).then((response) => {
        setPosts(response.data.posts);
      });
    };

    fetchAPI();
  }, []);

  return (
    <>
      <Head>
        <title>Home | Cart Web Application</title>
      </Head>

      <>
        <div className="grid grid-cols-2 gap-20 py-10 justify-items-center">
          {posts.map((post) => (
            <Card post={post} key={post.title + post.id} />
          ))}
        </div>
      </>
    </>
  );
};

export default Home;
