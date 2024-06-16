// data/portfolioData.ts
import { Portfolio } from '@/app/interfaces/portfolio'

export const portfolioData: Portfolio[] = [
    {
        id: 1,
        type: "app",
        title: "myPlate - Malaysia Car Plates",
        description: "myPlate has garned over 1k downloads in Google Playstore which serves as an go-to application to keep track of latest vehicle registration numbers. It is a simple and easy-to-use application that allows users to search for current running vehicle registration numbers by respective states in Malaysia, all without any registering account or login to account involved.",
        hyperlink: "https://play.google.com/store/apps/details?id=com.thinesjs.myplate&hl=en",
        thumbnail: "https://i.postimg.cc/wTZT4F5L/image.png",
        created_at: new Date("2023-06-16T00:00:00.000Z"),
        updated_at: null
    },
    // {
    //     id: 2,
    //     type: "app",
    //     title: "FlexiPOS - Point of Sale System",
    //     description: "FlexiPOS is a Point of Sale System that is designed to be user-friendly and easy to use. It is a fully offline-based system that allows users to manage their business without any internet access. It is suitable for all types of businesses, from small to large enterprises.",
    //     hyperlink: "https://thinesjs.com",
    //     thumbnail: "https://lh3.googleusercontent.com/GP-wB-jQwMAnOn_laoBcMnrX8FKqtrTsGGRYPFivu7iuuLkkC5LLx3rCwMtpFb6P43lJJrI8gRdsjkLJN5HAHfY3ew=w640-h400-e365-rj-sc0x00ffffff",
    //     created_at: new Date("2023-06-16T00:00:00.000Z"),
    //     updated_at: null
    // }
];
