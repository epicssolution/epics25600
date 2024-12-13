"use client";

import React from 'react';
import Head from 'next/head';

const page = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Epic Solutions</title>
      </Head>

      <main>
        <h1>Privacy Policy</h1>
        <p>Effective Date: [Insert Date]</p>

        <section>
          <h2>Welcome to Epic Solution!</h2>
          <p>
            At Epic Solutions, we are determined to empower the youth with new skills that are the need of the hour in this modern era. Whether you are a student or a job holder, our platform helps you in learning new skills. We believe that knowledge should be available to all, and we strive to make our resources easy to access.
          </p>
          <p>
            When you use our services, you are trusting us for your information to be secured. Understanding this is a big responsibility, we work hard to protect your information and ensure all of your information is secured with us.
          </p>
          <p>
            By using our website, you agree to the terms of use mentioned in this Privacy Policy. If you do not agree, please do not use our website.
          </p>
        </section>

        <section>
          <h2>1. What Information Do We Collect</h2>
          <ul>
            <li><strong>Information You Provide:</strong> This includes personal information like your name, email address, or any data you submit via forms on our website.</li>
            <li><strong>Information We Get When You Use Our Services:</strong> Includes non-personal information like browser type, IP address, and pages visited.</li>
            <li><strong>Information We Get From Third Parties:</strong> Includes data collected by third-party services like analytics tools or advertising networks.</li>
          </ul>
        </section>

        <section>
          <h3>a. Cookies and Tracking Technologies</h3>
          <p>
            Cookies and similar tracking technologies may be used to improve your browsing experience, analyze website usage, and provide personalized content or advertisements. Note: You can disable cookies in your browser settings, but this may affect your user experience.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To improve and maintain our website and content.</li>
            <li>To respond to your inquiries or feedback.</li>
            <li>To send newsletters or promotional materials (only if you opt-in).</li>
            <li>To analyze website traffic and user behavior.</li>
            <li>To ensure website security and prevent fraud.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Protect Your Information</h2>
          <p>
            We take the security of your information seriously and implement industry-standard measures like encryption, firewalls, and secure servers. However, no method of data transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2>4. Your Privacy Rights</h2>
          <ul>
            <li><strong>Access:</strong> Request access to the personal data we acquire from you.</li>
            <li><strong>Correction:</strong> Request corrections to your personal information if it is inaccurate or incomplete.</li>
            <li><strong>Deletion:</strong> Request the deletion of your personal information, subject to legal obligations.</li>
            <li><strong>Opt-Out:</strong> Opt-out of receiving promotional emails by following the "unsubscribe" link in our emails.</li>
          </ul>
          <p>To execute these rights, please contact us at [Insert Email Address].</p>
        </section>

        <section>
          <h2>5. Children’s Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13. If you believe a child has provided us with personal information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2>6. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal requirements. Updates will be posted on this page with a revised "Effective Date."
          </p>
        </section>

       
      </main>

      <style jsx>{`
        main {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        h1, h2, h3 {
          color: #333;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin-bottom: 10px;
        }
        p {
          margin-bottom: 15px;
        }
        address {
          font-style: normal;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};

export default page;
