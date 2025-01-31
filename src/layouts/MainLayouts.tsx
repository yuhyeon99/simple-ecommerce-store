// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "./header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* 여기에 페이지 내용이 렌더링됨 */}
      </main>
    </>
  );
};

export default MainLayout;
