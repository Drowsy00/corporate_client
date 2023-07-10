import { useRouter } from "next/router";
import styles from "../../styles/Post.module.css";
import { Post } from "../types";

type Props = {
  post: Post;
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3001/api/v1/posts`);
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3001/api/v1/posts/${params.id}`);
  const post = await res.json();

  //   console.log(post);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

const Post = ({ post }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.container}>
        <h1>詳細</h1>

        <table className={styles.table}>
          <tbody>
            <tr>
              <th>登録日</th>
              <td>{post.created_at}</td>
            </tr>
            <tr>
              <th>企業コード</th>
              <td>{post.companyCode}</td>
            </tr>
            <tr>
              <th>上場状況</th>
              <td>{post.listingStatus}</td>
            </tr>
            <tr>
              <th>企業名</th>
              <td>{post.companyName}</td>
            </tr>
            <tr>
              <th>企業名(カナ)</th>
              <td>{post.companyNameRead}</td>
            </tr>
            <tr>
              <th>郵便番号</th>
              <td>{post.postCode}</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>{post.location}</td>
            </tr>
            <tr>
              <th>代表者名</th>
              <td>{post.representative}</td>
            </tr>
            <tr>
              <th>代表者名(カナ)</th>
              <td>{post.representativeRead}</td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>{post.phone}</td>
            </tr>
            <tr>
              <th>売上(2022)</th>
              <td>{post.Earnings2022}</td>
            </tr>
            <tr>
              <th>利益(2022)</th>
              <td>{post.profit2022}</td>
            </tr>
            <tr>
              <th>売上(2021)</th>
              <td>{post.Earnings2021}</td>
            </tr>
            <tr>
              <th>利益(2021)</th>
              <td>{post.profit2021}</td>
            </tr>
            <tr>
              <th>売上(2020)</th>
              <td>{post.Earnings2020}</td>
            </tr>
            <tr>
              <th>利益(2020)</th>
              <td>{post.profit2020}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Post;
