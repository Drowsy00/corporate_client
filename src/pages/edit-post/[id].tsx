import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Post } from "../types";
import styles from "@/styles/Home.module.css";

type Props = {
  post: Post;
};

export async function getServerSideProps(context: any) {
  const id = context.params.id;

  const res = await fetch(`http://localhost:3001/api/v1/posts/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

const EditPost = ({ post }: Props) => {
  const [companyCode, setCompanyCode] = useState(post.companyCode);
  const [listingStatus, setListingStatus] = useState(post.listingStatus);
  const [companyName, setCompanyName] = useState(post.companyName);
  const [companyNameRead, setCompanyNameRead] = useState(post.companyNameRead);
  const [postCode, setPostCode] = useState(post.postCode);
  const [location, setLocation] = useState(post.location);
  const [representative, setRepresentative] = useState(post.representative);
  const [representativeRead, setRepresentativeRead] = useState(
    post.representativeRead
  );
  const [phone, setPhone] = useState(post.phone);
  const [Earnings2022, setEarnings2022] = useState(post.Earnings2022);
  const [profit2022, setProfit2022] = useState(post.profit2022);
  const [Earnings2021, setEarnings2021] = useState(post.Earnings2021);
  const [profit2021, setProfit2021] = useState(post.profit2021);
  const [Earnings2020, setEarnings2020] = useState(post.Earnings2020);
  const [profit2020, setProfit2020] = useState(post.profit2020);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/v1/posts/${post.id}`, {
        companyCode: companyCode,
        listingStatus: listingStatus,
        companyName: companyName,
        companyNameRead: companyNameRead,
        postCode: postCode,
        location: location,
        representative: representative,
        representativeRead: representativeRead,
        phone: phone,
        Earnings2022: Earnings2022,
        profit2022: profit2022,
        Earnings2021: Earnings2021,
        profit2021: profit2021,
        Earnings2020: Earnings2020,
        profit2020: profit2020,
      });
      router.push("/");
    } catch (err) {
      alert("編集に失敗しました。");
    }
  };

  return (
    <div className={styles.container}>
      <h1>企業情報編集</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>企業コード</label>
        <input
          type="number"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCompanyCode(parseInt(e.target.value))
          }
          value={companyCode}
        />

        <label className={styles.label}>上場状況</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setListingStatus(e.target.value)
          }
          value={listingStatus}
        />

        <label className={styles.label}>企業名</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCompanyName(e.target.value)
          }
          value={companyName}
        />

        <label className={styles.label}>企業名(カナ)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCompanyNameRead(e.target.value)
          }
          value={companyNameRead}
        />

        <label className={styles.label}>郵便番号</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPostCode(e.target.value)
          }
          value={postCode}
        />

        <label className={styles.label}>所在地</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLocation(e.target.value)
          }
          value={location}
        />

        <label className={styles.label}>代表者名</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setRepresentative(e.target.value)
          }
          value={representative}
        />

        <label className={styles.label}>代表者名(カナ)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setRepresentativeRead(e.target.value)
          }
          value={representativeRead}
        />

        <label className={styles.label}>電話番号</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
          value={phone}
        />

        <label className={styles.label}>売上(2022)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEarnings2022(e.target.value)
          }
          value={Earnings2022}
        />

        <label className={styles.label}>利益(2022)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfit2022(e.target.value)
          }
          value={profit2022}
        />

        <label className={styles.label}>売上(2021)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEarnings2021(e.target.value)
          }
          value={Earnings2021}
        />

        <label className={styles.label}>利益(2021)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfit2021(e.target.value)
          }
          value={profit2021}
        />

        <label className={styles.label}>売上(2020)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEarnings2020(e.target.value)
          }
          value={Earnings2020}
        />

        <label className={styles.label}>利益(2020)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfit2020(e.target.value)
          }
          value={profit2020}
        />

        <button type="submit" className={styles.submitEdit}>
          編集
        </button>
      </form>
    </div>
  );
};

export default EditPost;
