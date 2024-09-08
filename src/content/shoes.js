const shoes = [
    {
        id: 2,
        name: "Nike Pegasus Plus",
        price: "5,500",
        image: "/assets/images/Mensport/2.png",
        description: "รองเท้าวิ่งโร้ดรันนิ่งผู้ชาย",  // Path relative to the public folder
        type: "running",
        priceRange: "5000-10000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/20.jpg",
            "/assets/images/Mensport/Mendetail/21.jpg",
            "/assets/images/Mensport/Mendetail/22.jpg",       
            "/assets/images/Mensport/Mendetail/23.jpg",
            "/assets/images/Mensport/Mendetail/24.jpg",  
        ]
    },
    {
        id: 3,
        name: "Nike Juniper Trail 3",
        price: "7,800",
        image: "/assets/images/Mensport/3.png",  // Path relative to the public folder
        description: "รองเท้าวิ่งเทรลผู้ชาย",
        type: "running",
        priceRange: "5000-10000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/30.jpg",
            "/assets/images/Mensport/Mendetail/31.jpg",
            "/assets/images/Mensport/Mendetail/32.jpg",       
            "/assets/images/Mensport/Mendetail/33.jpg",
            "/assets/images/Mensport/Mendetail/34.jpg",  
        ]
    },
    {
        id: 4,
        name: "Nike Pegasus  5 GORE-TEX",
        price: "12,300",
        image: "/assets/images/Mensport/4.png",  // Path relative to the public folder
        description: "รองเท้าวิ่งเทรลผู้ชายกันน้ำ",
        type: "running",
        priceRange: "10000-15000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/40.jpg",
            "/assets/images/Mensport/Mendetail/41.jpg",
            "/assets/images/Mensport/Mendetail/42.jpg",       
            "/assets/images/Mensport/Mendetail/43.jpg",
            "/assets/images/Mensport/Mendetail/44.jpg",  
        ]
    },
    {
        id: 5,
        name: "Nike Pegasus 41",
        price: "6,500",
        image: "/assets/images/Mensport/5.png",
        description: "รองเท้าวิ่งโร้ดรันนิ่งผู้ชาย",
        type: "running",
        priceRange: "5000-10000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/50.jpg",
            "/assets/images/Mensport/Mendetail/51.jpg",
            "/assets/images/Mensport/Mendetail/52.jpg",       
            "/assets/images/Mensport/Mendetail/53.jpg",
            "/assets/images/Mensport/Mendetail/54.jpg",  
        ] 
    },
    {
        id: 6,
        name: "Nike Vaporfly 3",
        price: "4,500",
        image: "/assets/images/Mensport/6.png",
        description: "รองเท้าวิ่งโร้ดเรซซิ่งผู้ชาย",
        type: "running",
        priceRange: "0-5000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/60.jpg",
            "/assets/images/Mensport/Mendetail/61.jpg",
            "/assets/images/Mensport/Mendetail/62.jpg",       
            "/assets/images/Mensport/Mendetail/63.jpg",
            "/assets/images/Mensport/Mendetail/64.jpg",  
        ] 
    },
    {
        id: 7,
        name: "Nike Tiempo Legend 10 Elite ",
        price: "8,600",
        image: "/assets/images/Mensport/7.png",
        type: "football",
        priceRange: "5000-10000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/70.jpg",
            "/assets/images/Mensport/Mendetail/71.jpg",
            "/assets/images/Mensport/Mendetail/72.jpg",       
            "/assets/images/Mensport/Mendetail/73.jpg", 
        ]   
    },
    {
        id: 8,
        name: "Nike Mercurial Superfly 9",
        price: "11,400",
        image: "/assets/images/Mensport/8.png",  // Path relative to the public folder
        type: "football",
        priceRange: "10000-15000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/80.jpg",
            "/assets/images/Mensport/Mendetail/81.jpg",
            "/assets/images/Mensport/Mendetail/82.jpg",       
            "/assets/images/Mensport/Mendetail/83.jpg", 
        ]   
    },
    {
        id: 9,
        name: "Nike Mercurial Vapor 16 ",
        price: "9,000",
        image: "/assets/images/Mensport/9.png",  // Path relative to the public folder
        type: "football",
        priceRange: "5000-10000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/90.jpg",
            "/assets/images/Mensport/Mendetail/91.jpg",
            "/assets/images/Mensport/Mendetail/92.jpg",       
            "/assets/images/Mensport/Mendetail/93.jpg", 
            "/assets/images/Mensport/Mendetail/94.jpg", 
        ]   
    },
    {
        id: 10,
        name: "Nike Zoom Mercurial Superfly9",
        price: "11,300",
        image: "/assets/images/Mensport/10.png",  // Path relative to the public folder
        type: "football",
        priceRange: "10000-15000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/100.jpg",
            "/assets/images/Mensport/Mendetail/101.jpg",
            "/assets/images/Mensport/Mendetail/102.jpg",       
            "/assets/images/Mensport/Mendetail/103.jpg", 
            "/assets/images/Mensport/Mendetail/104.jpg", 
        ]   
    },
    {
        id: 11,
        name: "Luka 3 PF Motorsport",
        price: "5,200",
        image: "/assets/images/Mensport/11.png",  // Path relative to the public folder
        type: "basketball",
        priceRange: "5000-10000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/110.jpg",
            "/assets/images/Mensport/Mendetail/111.jpg",
            "/assets/images/Mensport/Mendetail/112.jpg",       
            "/assets/images/Mensport/Mendetail/113.jpg", 
        ]   
    },
    {
        id: 12,
        name: "Nike G.T. Jump 2 EP",
        price: "6,600",
        image: "/assets/images/Mensport/12.png",  // Path relative to the public folder
        type: "basketball",
        priceRange: "5000-10000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/120.jpg",
            "/assets/images/Mensport/Mendetail/121.jpg",
            "/assets/images/Mensport/Mendetail/122.jpg",       
            "/assets/images/Mensport/Mendetail/123.jpg", 
        ]   
    },
    {
        id: 13,
        name: "G.T. Hustle Academy EP",
        price: "3,400",
        image: "/assets/images/Mensport/13.png",  // Path relative to the public folder
        type: "basketball",
        priceRange: "0-5000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/130.jpg",
            "/assets/images/Mensport/Mendetail/131.jpg",
            "/assets/images/Mensport/Mendetail/132.jpg",       
            "/assets/images/Mensport/Mendetail/133.jpg", 
        ]   
    },
    {
        id: 14,
        name: "Luka 3 PF Blurred Vision",
        price: "5,200",
        image: "/assets/images/Mensport/14.png",  // Path relative to the public folder
        type: "basketball",
        priceRange: "5000-10000",
        additionalImages: [
            "/assets/images/Mensport/Mendetail/140.jpg",
            "/assets/images/Mensport/Mendetail/141.jpg",
            "/assets/images/Mensport/Mendetail/142.jpg",       
            "/assets/images/Mensport/Mendetail/143.jpg", 
            "/assets/images/Mensport/Mendetail/144.jpg", 
        ]   
    },
];

export default shoes;
