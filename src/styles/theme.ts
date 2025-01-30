// src/styles/theme.ts
import "@emotion/react";

// 테마 타입 정의
export const lightTheme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    background: "#ffffff",
    text: "#212529",
  },
} as const;

export const darkTheme = {
  colors: {
    primary: "#6610f2",
    secondary: "#343a40",
    background: "#121212",
    text: "#ffffff",
  },
} as const;

// Emotion이 theme 타입을 인식할 수 있도록 선언 확장
declare module "@emotion/react" {
  export interface Theme {
    colors: typeof lightTheme.colors;
  }
}
