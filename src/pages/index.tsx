import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Post } from "./types";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

type Props = {
  posts: Post[];
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/api/v1/posts");
  const posts = await res.json();

  console.log(posts);

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }: Props) {
  const router = useRouter();

  const handleDelete = async (postId: string) => {
    try {
      await axios.delete(`http://localhost:3001/api/v1/posts/${postId}`);
      router.reload();
    } catch (err) {
      alert("削除に失敗しました。");
    }
  };
  return (
    <>
      <Head>
        <title>corprate db</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.tableContainer}>
        <h1>企業経営情報データベース</h1>
        <br />
        <Link href="/create-post">
          <button className={styles.createButton}>
            新しく企業情報を登録する
          </button>
        </Link>
        <br />
        <br />
        <div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>企業コード</th>
                <th>上場状況</th>
                <th>企業名</th>
                <th>企業名(カナ)</th>
                <th>郵便番号</th>
                <th>所在地</th>
                <th>代表者名</th>
                <th>代表者名(カナ)</th>
                <th>電話番号</th>
                <th>売上(2022)</th>
                <th>利益(2022)</th>
                <th>売上(2021)</th>
                <th>利益(2021)</th>
                <th>売上(2020)</th>
                <th>利益(2020)</th>
              </tr>
            </thead>

            <tbody>
              {posts.map((post: Post) => (
                <tr key={post.id}>
                  <td>
                    <Link href={`posts/${post.id}`}>
                      <button className={styles.detailButton}>詳細</button>
                    </Link>
                    <Link href={`/edit-post/${post.id}`}>
                      <button className={styles.editButton}>編集</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className={styles.deleteButton}
                    >
                      削除
                    </button>
                  </td>
                  <td>{post.companyCode}</td>
                  <td>{post.listingStatus}</td>
                  <td>{post.companyName}</td>
                  <td>{post.companyNameRead}</td>
                  <td>{post.postCode}</td>
                  <td>{post.location}</td>
                  <td>{post.representative}</td>
                  <td>{post.representativeRead}</td>
                  <td>{post.phone}</td>
                  <td>{post.Earnings2022}</td>
                  <td>{post.profit2022}</td>
                  <td>{post.Earnings2021}</td>
                  <td>{post.profit2021}</td>
                  <td>{post.Earnings2020}</td>
                  <td>{post.profit2020}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
