import "./styles/NavBar.css"; 

const NavBar = () => { 
    return(
        <nav>
            <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.75 15V3.36364H3.90909V7.90909H8.09091V3.36364H11.25V15H8.09091V10.4545H3.90909V15H0.75ZM27.6364 3.36364H30.7955V10.8182C30.7955 11.7045 30.5833 12.4716 30.1591 13.1193C29.7386 13.7633 29.1515 14.2614 28.3977 14.6136C27.6439 14.9621 26.7689 15.1364 25.7727 15.1364C24.7689 15.1364 23.8902 14.9621 23.1364 14.6136C22.3826 14.2614 21.7955 13.7633 21.375 13.1193C20.9583 12.4716 20.75 11.7045 20.75 10.8182V3.36364H23.9091V10.5455C23.9091 10.9053 23.9886 11.2273 24.1477 11.5114C24.3068 11.7917 24.5265 12.0114 24.8068 12.1705C25.0909 12.3295 25.4129 12.4091 25.7727 12.4091C26.1364 12.4091 26.4583 12.3295 26.7386 12.1705C27.0189 12.0114 27.2386 11.7917 27.3977 11.5114C27.5568 11.2273 27.6364 10.9053 27.6364 10.5455V3.36364ZM8.30682 26.2045C8.25758 26.0038 8.17992 25.8277 8.07386 25.6761C7.9678 25.5208 7.83523 25.3902 7.67614 25.2841C7.52083 25.1742 7.33902 25.0928 7.13068 25.0398C6.92614 24.983 6.70076 24.9545 6.45455 24.9545C5.92424 24.9545 5.47159 25.0814 5.09659 25.3352C4.72538 25.589 4.44129 25.9545 4.24432 26.4318C4.05114 26.9091 3.95455 27.4848 3.95455 28.1591C3.95455 28.8409 4.04735 29.4242 4.23295 29.9091C4.41856 30.3939 4.69508 30.7652 5.0625 31.0227C5.42992 31.2803 5.88636 31.4091 6.43182 31.4091C6.91288 31.4091 7.3125 31.339 7.63068 31.1989C7.95265 31.0587 8.19318 30.8598 8.35227 30.6023C8.51136 30.3447 8.59091 30.0417 8.59091 29.6932L9.13636 29.75H6.47727V27.5H11.6364V29.1136C11.6364 30.1742 11.411 31.0814 10.9602 31.8352C10.5133 32.5852 9.89583 33.161 9.10795 33.5625C8.32386 33.9602 7.42424 34.1591 6.40909 34.1591C5.27652 34.1591 4.2822 33.9186 3.42614 33.4375C2.57008 32.9564 1.90152 32.2708 1.42045 31.3807C0.943182 30.4905 0.704545 29.4318 0.704545 28.2045C0.704545 27.2424 0.850379 26.3902 1.14205 25.6477C1.4375 24.9053 1.84659 24.2784 2.36932 23.767C2.89205 23.2519 3.49621 22.8636 4.18182 22.6023C4.86742 22.3371 5.60227 22.2045 6.38636 22.2045C7.07576 22.2045 7.71591 22.303 8.30682 22.5C8.90152 22.6932 9.42614 22.9697 9.88068 23.3295C10.339 23.6856 10.7083 24.108 10.9886 24.5966C11.2689 25.0852 11.4394 25.6212 11.5 26.2045H8.30682ZM27.3821 26C27.3518 25.6212 27.2098 25.3258 26.956 25.1136C26.706 24.9015 26.3253 24.7955 25.8139 24.7955C25.4882 24.7955 25.2211 24.8352 25.0128 24.9148C24.8082 24.9905 24.6567 25.0947 24.5582 25.2273C24.4598 25.3598 24.4086 25.5114 24.4048 25.6818C24.3973 25.822 24.4219 25.9489 24.4787 26.0625C24.5393 26.1723 24.634 26.2727 24.7628 26.3636C24.8916 26.4508 25.0563 26.5303 25.2571 26.6023C25.4579 26.6742 25.6965 26.7386 25.973 26.7955L26.9276 27C27.5715 27.1364 28.1226 27.3163 28.581 27.5398C29.0393 27.7633 29.4143 28.0265 29.706 28.3295C29.9976 28.6288 30.2116 28.9659 30.348 29.3409C30.4882 29.7159 30.5601 30.125 30.5639 30.5682C30.5601 31.3333 30.3688 31.9811 29.9901 32.5114C29.6113 33.0417 29.0696 33.4451 28.3651 33.7216C27.6643 33.9981 26.8215 34.1364 25.8366 34.1364C24.8253 34.1364 23.9427 33.9867 23.1889 33.6875C22.4389 33.3883 21.8556 32.928 21.4389 32.3068C21.026 31.6818 20.8177 30.8826 20.8139 29.9091H23.8139C23.8329 30.2652 23.9219 30.5644 24.081 30.8068C24.2401 31.0492 24.4635 31.233 24.7514 31.358C25.0431 31.483 25.3897 31.5455 25.7912 31.5455C26.1283 31.5455 26.4105 31.5038 26.6378 31.4205C26.8651 31.3371 27.0374 31.2216 27.1548 31.0739C27.2723 30.9261 27.3329 30.7576 27.3366 30.5682C27.3329 30.3902 27.2741 30.2348 27.1605 30.1023C27.0507 29.9659 26.8688 29.8447 26.6151 29.7386C26.3613 29.6288 26.0185 29.5265 25.5866 29.4318L24.4276 29.1818C23.3973 28.9583 22.5848 28.5852 21.9901 28.0625C21.3991 27.536 21.1056 26.8182 21.1094 25.9091C21.1056 25.1705 21.3026 24.5246 21.7003 23.9716C22.1018 23.4148 22.6567 22.9811 23.3651 22.6705C24.0772 22.3598 24.8935 22.2045 25.8139 22.2045C26.7533 22.2045 27.5658 22.3617 28.2514 22.6761C28.937 22.9905 29.4654 23.4337 29.8366 24.0057C30.2116 24.5739 30.401 25.2386 30.4048 26H27.3821Z" fill="#E73D00"/>
        </svg>
            <ul>
                <li>about</li>
                <li>work</li>
                <li>contact</li>
            </ul>
        </nav>
    )
}

export default NavBar; 