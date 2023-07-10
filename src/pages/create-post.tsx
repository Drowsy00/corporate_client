import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

const CreatePost = () => {
  const [companyCode, setCompanyCode] = useState("");
  const [listingStatus, setListingStatus] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyNameRead, setCompanyNameRead] = useState("");
  const [postCode, setPostCode] = useState("");
  const [location, setLocation] = useState("");
  const [representative, setRepresentative] = useState("");
  const [representativeRead, setRepresentativeRead] = useState("");
  const [phone, setPhone] = useState("");
  const [Earnings2022, setEarnings2022] = useState("");
  const [profit2022, setProfit2022] = useState("");
  const [Earnings2021, setEarnings2021] = useState("");
  const [profit2021, setProfit2021] = useState("");
  const [Earnings2020, setEarnings2020] = useState("");
  const [profit2020, setProfit2020] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/v1/posts", {
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
      alert("登録に失敗しました。");
    }
  };

  return (
    <div className={styles.container}>
      <h1>企業情報新規登録</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>企業コード</label>
        <input
          type="number"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCompanyCode(e.target.value)
          }
        />

        <label className={styles.label}>上場状況</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setListingStatus(e.target.value)
          }
        />

        <label className={styles.label}>企業名</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCompanyName(e.target.value)
          }
        />

        <label className={styles.label}>企業名(カナ)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCompanyNameRead(e.target.value)
          }
        />

        <label className={styles.label}>郵便番号</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPostCode(e.target.value)
          }
        />

        <label className={styles.label}>所在地</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLocation(e.target.value)
          }
        />

        <label className={styles.label}>代表者名</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setRepresentative(e.target.value)
          }
        />

        <label className={styles.label}>代表者名(カナ)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setRepresentativeRead(e.target.value)
          }
        />

        <label className={styles.label}>電話番号</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
        />

        <label className={styles.label}>売上(2022)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEarnings2022(e.target.value)
          }
        />

        <label className={styles.label}>利益(2022)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfit2022(e.target.value)
          }
        />

        <label className={styles.label}>売上(2021)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEarnings2021(e.target.value)
          }
        />

        <label className={styles.label}>利益(2021)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfit2021(e.target.value)
          }
        />

        <label className={styles.label}>売上(2020)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEarnings2020(e.target.value)
          }
        />

        <label className={styles.label}>利益(2020)</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProfit2020(e.target.value)
          }
        />

        <button type="submit" className={styles.submitCreate}>
          登録
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
