"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { fetchInterviews } from "@/src/services/interview-services";
import { Interview } from "../../src/entities/interview";

export default function Dashboard() {
  const [interviews, setInterviews] = useState<Interview[]>([]);

  useEffect(() => {
    fetchInterviews().then((interviewsData) => {
      setInterviews(interviewsData);
    });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {interviews.map((interview) => (
          <div className={styles.card} key={interview.id}>
            <div className={styles.title}>
              <div>Position</div>
              <div className={styles.divider}></div>
            </div>
            <p>{interview.jobPosition.title}</p>
            <div className={styles.title}>
              <div>Experience</div>
              <div className={styles.divider}></div>
            </div>
            <p className={styles.experience}>
              {interview.jobPosition.experience}{" "}
              {interview.jobPosition.experience > 1 ? "years" : "year"}
            </p>
            <div className={styles.title}>
              <div>Feedback</div>
              <div className={styles.divider}></div>
            </div>
            <div className={styles.feedback}>
              {interview.feedback ? <></> : <>No feedback yet.</>}
            </div>
            <div className={styles.title}>
              <div>Stacks</div>
              <div className={styles.divider}></div>
            </div>
            <div className={styles.stacks}>
              {interview.jobPosition.stacks.map((stack) => (
                <p key={stack}>{stack}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
