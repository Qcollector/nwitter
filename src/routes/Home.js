import React, { useEffect, useState } from "react";
import { dbService } from "firebaseApp";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
} from "firebase/firestore";
const Home = () => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const getNweets = async () => {
    const dbNweets = await getDocs(collection(dbService, "nweets"));
    dbNweets.forEach((document) => {
      const nweetsObj = {
        ...document.data(),
        id: document.id,
      };
      setNweets((prev) => [nweetsObj, ...prev]);
    });
  };
  useEffect(() => {
    getNweets();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(dbService, "nweets"), {
        nweet,
        createdAt: serverTimestamp(),
      });
      setNweet("");
    } catch (event) {}
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        placeholder="What's on your mind"
        maxLength={120}
      />
      <input type="submit" value="nweet" />

      <div>
        {nweets.map((nweet) => (
          <div key="nweet.id">
            <h4>{nweet.nweet}</h4>
          </div>
        ))}
      </div>
    </form>
  );
};

export default Home;
