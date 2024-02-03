import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import moment from "moment";

const Topbar = () => {
  
    const TabIcon = () => {
        return (
          <svg
            className="my-auto"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.875 3.75V16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.0669C2.56585 15.9497 2.5 15.7908 2.5 15.625V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H6.875Z"
              fill="#1C1C1C"
              fill-opacity="0.1"
            />
            <path
              d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM3.125 11.875H4.375C4.54076 11.875 4.69973 11.8092 4.81694 11.6919C4.93415 11.5747 5 11.4158 5 11.25C5 11.0842 4.93415 10.9253 4.81694 10.8081C4.69973 10.6908 4.54076 10.625 4.375 10.625H3.125V9.375H4.375C4.54076 9.375 4.69973 9.30915 4.81694 9.19194C4.93415 9.07473 5 8.91576 5 8.75C5 8.58424 4.93415 8.42527 4.81694 8.30806C4.69973 8.19085 4.54076 8.125 4.375 8.125H3.125V6.875H4.375C4.54076 6.875 4.69973 6.80915 4.81694 6.69194C4.93415 6.57473 5 6.41576 5 6.25C5 6.08424 4.93415 5.92527 4.81694 5.80806C4.69973 5.69085 4.54076 5.625 4.375 5.625H3.125V4.375H6.25V15.625H3.125V11.875ZM16.875 15.625H7.5V4.375H16.875V15.625Z"
              fill="#1C1C1C"
            />
          </svg>
        );
      };
      const StarIcon = () => {
        return (
          <svg
            className="my-auto"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3851 11.5391C14.2995 11.6143 14.2358 11.7114 14.2009 11.8199C14.1659 11.9284 14.161 12.0444 14.1867 12.1555L15.2429 16.7289C15.2709 16.8484 15.263 16.9734 15.2204 17.0884C15.1777 17.2034 15.1022 17.3033 15.0031 17.3757C14.9041 17.4481 14.786 17.4897 14.6634 17.4955C14.5409 17.5012 14.4194 17.4707 14.314 17.4078L10.3218 14.9859C10.2248 14.927 10.1135 14.8958 9.99998 14.8958C9.88645 14.8958 9.7751 14.927 9.6781 14.9859L5.68591 17.4078C5.58058 17.4707 5.45907 17.5012 5.33654 17.4955C5.214 17.4897 5.09585 17.4481 4.99682 17.3757C4.89778 17.3033 4.82223 17.2034 4.77959 17.0884C4.73695 16.9734 4.72909 16.8484 4.75701 16.7289L5.81326 12.1555C5.83893 12.0444 5.83404 11.9284 5.7991 11.8199C5.76416 11.7114 5.70048 11.6143 5.61482 11.5391L2.0906 8.46484C1.99638 8.38476 1.92803 8.27854 1.8942 8.1596C1.86038 8.04067 1.86259 7.91437 1.90056 7.79669C1.93853 7.67901 2.01056 7.57524 2.10752 7.49851C2.20449 7.42178 2.32203 7.37553 2.44529 7.36562L7.0906 6.96406C7.20393 6.95397 7.31236 6.91312 7.40419 6.84594C7.49602 6.77875 7.56777 6.68777 7.61169 6.58281L9.42654 2.25781C9.47501 2.14599 9.55512 2.05079 9.657 1.98391C9.75889 1.91703 9.8781 1.8814 9.99998 1.8814C10.1218 1.8814 10.2411 1.91703 10.3429 1.98391C10.4448 2.05079 10.5249 2.14599 10.5734 2.25781L12.3883 6.58281C12.4322 6.68777 12.5039 6.77875 12.5958 6.84594C12.6876 6.91312 12.796 6.95397 12.9094 6.96406L17.5547 7.36562C17.6779 7.37553 17.7955 7.42178 17.8924 7.49851C17.9894 7.57524 18.0614 7.67901 18.0994 7.79669C18.1374 7.91437 18.1396 8.04067 18.1057 8.1596C18.0719 8.27854 18.0036 8.38476 17.9094 8.46484L14.3851 11.5391Z"
              fill="#1C1C1C"
              fill-opacity="0.1"
            />
            <path
              d="M18.6875 7.60078C18.6118 7.36749 18.4692 7.16162 18.2773 7.00881C18.0855 6.856 17.8529 6.76301 17.6086 6.74141L12.9688 6.34141L11.15 2.01641C11.0553 1.78947 10.8956 1.59562 10.691 1.45926C10.4863 1.32291 10.2459 1.25016 10 1.25016C9.75411 1.25016 9.51371 1.32291 9.30907 1.45926C9.10443 1.59562 8.94471 1.78947 8.85002 2.01641L7.03674 6.34141L2.39142 6.74375C2.14614 6.76436 1.9124 6.85693 1.71952 7.00986C1.52663 7.16278 1.38319 7.36925 1.30718 7.60337C1.23117 7.83749 1.22598 8.08884 1.29225 8.3259C1.35852 8.56296 1.49331 8.77518 1.6797 8.93594L5.20392 12.0156L4.14767 16.5891C4.09182 16.8284 4.10776 17.0789 4.19349 17.3092C4.27923 17.5395 4.43095 17.7395 4.6297 17.884C4.82845 18.0286 5.0654 18.1113 5.31093 18.122C5.55647 18.1326 5.79968 18.0706 6.01017 17.9438L9.99455 15.5219L13.9875 17.9438C14.198 18.0706 14.4412 18.1326 14.6868 18.122C14.9323 18.1113 15.1692 18.0286 15.368 17.884C15.5667 17.7395 15.7185 17.5395 15.8042 17.3092C15.8899 17.0789 15.9059 16.8284 15.85 16.5891L14.7945 12.0109L18.318 8.93594C18.5044 8.77462 18.6389 8.5618 18.7046 8.32423C18.7704 8.08667 18.7644 7.83497 18.6875 7.60078ZM17.4985 7.99141L13.975 11.0664C13.8035 11.2156 13.676 11.4087 13.606 11.6249C13.5361 11.8412 13.5265 12.0724 13.5781 12.2938L14.6367 16.875L10.6469 14.4531C10.4522 14.3346 10.2287 14.2719 10.0008 14.2719C9.77288 14.2719 9.54936 14.3346 9.3547 14.4531L5.37033 16.875L6.42189 12.2969C6.47357 12.0755 6.46393 11.8443 6.394 11.6281C6.32407 11.4118 6.1965 11.2187 6.02502 11.0695L2.50002 7.99609C2.49973 7.99376 2.49973 7.9914 2.50002 7.98906L7.14377 7.5875C7.37049 7.56752 7.58745 7.48601 7.77125 7.35178C7.95505 7.21754 8.09871 7.03567 8.18674 6.82578L10 2.50625L11.8125 6.82578C11.9005 7.03567 12.0442 7.21754 12.228 7.35178C12.4118 7.48601 12.6288 7.56752 12.8555 7.5875L17.5 7.98906C17.5 7.98906 17.5 7.99375 17.5 7.99453L17.4985 7.99141Z"
              fill="#1C1C1C"
            />
          </svg>
        );
      };
    return (
           
        <div className="flex justify-between  border-b p-4">
          <div className="flex gap-4 w-full">
            <button className="hover:bg-[#1C1C1C33] p-0.5 rounded-md my-auto">
            <TabIcon />
            </button>
            <button className="hover:bg-[#1C1C1C33] p-0.5 rounded-md my-auto">

            <StarIcon />

</button>
            <span className="text-[#1C1C1C66] text-[14px] font-inter my-auto">
              Dashboards &nbsp; &nbsp; /
            </span>
            <span className="text-[#1C1C1C] text-[14px] font-inter my-auto">
              {"Default"}
            </span>
          </div>
          <div className="flex gap-4">
            <div className="flex bg-[#1C1C1C0D] w-32 px-2 py-1 justify-between rounded-md">
              <div className="flex gap-2">
                
                <MagnifyingGlassIcon className="w-3 h-3 text-[#1C1C1C33] my-auto" />
                <input placeholder="Search" className="text-black bg-[#1C1C1C00] w-[90px] rounded-md px-2 text-[14px] font-inter">
                  
                </input>
              </div>

              <svg

                className="my-auto"
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.84801 11.2287C2.4536 11.2287 2.09233 11.1326 1.7642 10.9403C1.43608 10.7448 1.17424 10.483 0.978693 10.1548C0.786458 9.8267 0.690341 9.46544 0.690341 9.07102C0.690341 8.6733 0.786458 8.31037 0.978693 7.98224C1.17424 7.65412 1.43608 7.39228 1.7642 7.19673C2.09233 7.00118 2.4536 6.90341 2.84801 6.90341H4.00142V4.90483H2.84801C2.4536 4.90483 2.09233 4.80871 1.7642 4.61648C1.43608 4.42093 1.17424 4.16075 0.978693 3.83594C0.786458 3.50781 0.690341 3.14489 0.690341 2.74716C0.690341 2.34943 0.786458 1.98816 0.978693 1.66335C1.17424 1.33523 1.43608 1.07505 1.7642 0.882812C2.09233 0.687263 2.4536 0.589488 2.84801 0.589488C3.24574 0.589488 3.60866 0.687263 3.93679 0.882812C4.26491 1.07505 4.52675 1.33523 4.7223 1.66335C4.91785 1.98816 5.01562 2.34943 5.01562 2.74716V3.89062H7.0142V2.74716C7.0142 2.34943 7.11032 1.98816 7.30256 1.66335C7.49811 1.33523 7.75829 1.07505 8.0831 0.882812C8.41122 0.687263 8.77415 0.589488 9.17188 0.589488C9.5696 0.589488 9.93087 0.687263 10.2557 0.882812C10.5838 1.07505 10.844 1.33523 11.0362 1.66335C11.2318 1.98816 11.3295 2.34943 11.3295 2.74716C11.3295 3.14489 11.2318 3.50781 11.0362 3.83594C10.844 4.16075 10.5838 4.42093 10.2557 4.61648C9.93087 4.80871 9.5696 4.90483 9.17188 4.90483H8.02841V6.90341H9.17188C9.5696 6.90341 9.93087 7.00118 10.2557 7.19673C10.5838 7.39228 10.844 7.65412 11.0362 7.98224C11.2318 8.31037 11.3295 8.6733 11.3295 9.07102C11.3295 9.46544 11.2318 9.8267 11.0362 10.1548C10.844 10.483 10.5838 10.7448 10.2557 10.9403C9.93087 11.1326 9.5696 11.2287 9.17188 11.2287C8.77415 11.2287 8.41122 11.1326 8.0831 10.9403C7.75829 10.7448 7.49811 10.483 7.30256 10.1548C7.11032 9.8267 7.0142 9.46544 7.0142 9.07102V7.91761H5.01562V9.07102C5.01562 9.46544 4.91785 9.8267 4.7223 10.1548C4.52675 10.483 4.26491 10.7448 3.93679 10.9403C3.60866 11.1326 3.24574 11.2287 2.84801 11.2287ZM2.84801 10.2145C3.06013 10.2145 3.25237 10.1631 3.42472 10.0604C3.60038 9.95762 3.73958 9.82008 3.84233 9.64773C3.94839 9.47206 4.00142 9.27983 4.00142 9.07102V7.91761H2.84801C2.6392 7.91761 2.44697 7.97064 2.27131 8.0767C2.09896 8.17945 1.96141 8.31866 1.85866 8.49432C1.75592 8.66667 1.70455 8.8589 1.70455 9.07102C1.70455 9.27983 1.75592 9.47206 1.85866 9.64773C1.96141 9.82008 2.09896 9.95762 2.27131 10.0604C2.44697 10.1631 2.6392 10.2145 2.84801 10.2145ZM2.84801 3.89062H4.00142V2.74716C4.00142 2.53504 3.94839 2.3428 3.84233 2.17045C3.73958 1.99811 3.60038 1.86056 3.42472 1.75781C3.25237 1.65507 3.06013 1.60369 2.84801 1.60369C2.6392 1.60369 2.44697 1.65507 2.27131 1.75781C2.09896 1.86056 1.96141 1.99811 1.85866 2.17045C1.75592 2.3428 1.70455 2.53504 1.70455 2.74716C1.70455 2.95928 1.75592 3.15317 1.85866 3.32883C1.96141 3.50118 2.09896 3.63873 2.27131 3.74148C2.44697 3.84091 2.6392 3.89062 2.84801 3.89062ZM8.02841 3.89062H9.17188C9.384 3.89062 9.57623 3.84091 9.74858 3.74148C9.92093 3.63873 10.0585 3.50118 10.1612 3.32883C10.264 3.15317 10.3153 2.95928 10.3153 2.74716C10.3153 2.53504 10.264 2.3428 10.1612 2.17045C10.0585 1.99811 9.92093 1.86056 9.74858 1.75781C9.57623 1.65507 9.384 1.60369 9.17188 1.60369C8.95975 1.60369 8.76586 1.65507 8.5902 1.75781C8.41785 1.86056 8.2803 1.99811 8.17756 2.17045C8.07813 2.3428 8.02841 2.53504 8.02841 2.74716V3.89062ZM9.17188 10.2145C9.384 10.2145 9.57623 10.1631 9.74858 10.0604C9.92093 9.95762 10.0585 9.82008 10.1612 9.64773C10.264 9.47206 10.3153 9.27983 10.3153 9.07102C10.3153 8.8589 10.264 8.66667 10.1612 8.49432C10.0585 8.31866 9.92093 8.17945 9.74858 8.0767C9.57623 7.97064 9.384 7.91761 9.17188 7.91761H8.02841V9.07102C8.02841 9.27983 8.07813 9.47206 8.17756 9.64773C8.2803 9.82008 8.41785 9.95762 8.5902 10.0604C8.76586 10.1631 8.95975 10.2145 9.17188 10.2145ZM5.01562 6.90341H7.0142V4.90483H5.01562V6.90341ZM17.687 0.340908L14.4057 12.5312H13.3319L16.6131 0.340908H17.687Z"
                  fill="#1C1C1C"
                  fill-opacity="0.2"
                />
              </svg>
       
            </div>
            <button className="hover:bg-[#1C1C1C33] p-0.5 rounded-md my-auto">

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.375 10C14.375 10.8653 14.1184 11.7112 13.6377 12.4306C13.157 13.1501 12.4737 13.7108 11.6742 14.042C10.8748 14.3731 9.99515 14.4597 9.14648 14.2909C8.29781 14.1221 7.51826 13.7054 6.90641 13.0936C6.29456 12.4817 5.87788 11.7022 5.70907 10.8535C5.54026 10.0049 5.6269 9.12519 5.95803 8.32576C6.28916 7.52633 6.84992 6.84305 7.56938 6.36232C8.28885 5.88159 9.13471 5.625 10 5.625C11.1603 5.625 12.2731 6.08594 13.0936 6.90641C13.9141 7.72688 14.375 8.83968 14.375 10Z"
                fill="#1C1C1C"
                fill-opacity="0.1"
              />
              <path
                d="M9.375 3.125V1.25C9.375 1.08424 9.44085 0.925268 9.55806 0.808058C9.67527 0.690848 9.83424 0.625 10 0.625C10.1658 0.625 10.3247 0.690848 10.4419 0.808058C10.5592 0.925268 10.625 1.08424 10.625 1.25V3.125C10.625 3.29076 10.5592 3.44973 10.4419 3.56694C10.3247 3.68415 10.1658 3.75 10 3.75C9.83424 3.75 9.67527 3.68415 9.55806 3.56694C9.44085 3.44973 9.375 3.29076 9.375 3.125ZM15 10C15 10.9889 14.7068 11.9556 14.1573 12.7779C13.6079 13.6001 12.827 14.241 11.9134 14.6194C10.9998 14.9978 9.99445 15.0969 9.02455 14.9039C8.05464 14.711 7.16373 14.2348 6.46447 13.5355C5.7652 12.8363 5.289 11.9454 5.09607 10.9755C4.90315 10.0055 5.00216 9.00021 5.3806 8.08658C5.75904 7.17295 6.3999 6.39206 7.22215 5.84265C8.04439 5.29324 9.01109 5 10 5C11.3256 5.00145 12.5966 5.5287 13.5339 6.46606C14.4713 7.40343 14.9986 8.67436 15 10ZM13.75 10C13.75 9.25832 13.5301 8.5333 13.118 7.91661C12.706 7.29993 12.1203 6.81928 11.4351 6.53545C10.7498 6.25162 9.99584 6.17736 9.26841 6.32206C8.54098 6.46675 7.8728 6.8239 7.34835 7.34835C6.8239 7.8728 6.46675 8.54098 6.32206 9.26841C6.17736 9.99584 6.25162 10.7498 6.53545 11.4351C6.81928 12.1203 7.29993 12.706 7.91661 13.118C8.5333 13.5301 9.25832 13.75 10 13.75C10.9942 13.749 11.9475 13.3535 12.6505 12.6505C13.3535 11.9475 13.749 10.9942 13.75 10ZM4.55781 5.44219C4.67509 5.55946 4.83415 5.62535 5 5.62535C5.16585 5.62535 5.32491 5.55946 5.44219 5.44219C5.55946 5.32491 5.62535 5.16585 5.62535 5C5.62535 4.83415 5.55946 4.67509 5.44219 4.55781L4.19219 3.30781C4.07491 3.19054 3.91585 3.12465 3.75 3.12465C3.58415 3.12465 3.42509 3.19054 3.30781 3.30781C3.19054 3.42509 3.12465 3.58415 3.12465 3.75C3.12465 3.91585 3.19054 4.07491 3.30781 4.19219L4.55781 5.44219ZM4.55781 14.5578L3.30781 15.8078C3.19054 15.9251 3.12465 16.0841 3.12465 16.25C3.12465 16.4159 3.19054 16.5749 3.30781 16.6922C3.42509 16.8095 3.58415 16.8753 3.75 16.8753C3.91585 16.8753 4.07491 16.8095 4.19219 16.6922L5.44219 15.4422C5.50026 15.3841 5.54632 15.3152 5.57775 15.2393C5.60917 15.1634 5.62535 15.0821 5.62535 15C5.62535 14.9179 5.60917 14.8366 5.57775 14.7607C5.54632 14.6848 5.50026 14.6159 5.44219 14.5578C5.38412 14.4997 5.31518 14.4537 5.23931 14.4223C5.16344 14.3908 5.08212 14.3747 5 14.3747C4.91788 14.3747 4.83656 14.3908 4.76069 14.4223C4.68482 14.4537 4.61588 14.4997 4.55781 14.5578ZM15 5.625C15.0821 5.62506 15.1634 5.60895 15.2393 5.57759C15.3152 5.54622 15.3841 5.50021 15.4422 5.44219L16.6922 4.19219C16.8095 4.07491 16.8753 3.91585 16.8753 3.75C16.8753 3.58415 16.8095 3.42509 16.6922 3.30781C16.5749 3.19054 16.4159 3.12465 16.25 3.12465C16.0841 3.12465 15.9251 3.19054 15.8078 3.30781L14.5578 4.55781C14.4703 4.64522 14.4107 4.75663 14.3865 4.87793C14.3624 4.99924 14.3748 5.12498 14.4221 5.23924C14.4695 5.35351 14.5496 5.45116 14.6525 5.51982C14.7554 5.58849 14.8763 5.6251 15 5.625ZM15.4422 14.5578C15.3249 14.4405 15.1659 14.3747 15 14.3747C14.8341 14.3747 14.6751 14.4405 14.5578 14.5578C14.4405 14.6751 14.3747 14.8341 14.3747 15C14.3747 15.1659 14.4405 15.3249 14.5578 15.4422L15.8078 16.6922C15.8659 16.7503 15.9348 16.7963 16.0107 16.8277C16.0866 16.8592 16.1679 16.8753 16.25 16.8753C16.3321 16.8753 16.4134 16.8592 16.4893 16.8277C16.5652 16.7963 16.6341 16.7503 16.6922 16.6922C16.7503 16.6341 16.7963 16.5652 16.8277 16.4893C16.8592 16.4134 16.8753 16.3321 16.8753 16.25C16.8753 16.1679 16.8592 16.0866 16.8277 16.0107C16.7963 15.9348 16.7503 15.8659 16.6922 15.8078L15.4422 14.5578ZM3.75 10C3.75 9.83424 3.68415 9.67527 3.56694 9.55806C3.44973 9.44085 3.29076 9.375 3.125 9.375H1.25C1.08424 9.375 0.925268 9.44085 0.808058 9.55806C0.690848 9.67527 0.625 9.83424 0.625 10C0.625 10.1658 0.690848 10.3247 0.808058 10.4419C0.925268 10.5592 1.08424 10.625 1.25 10.625H3.125C3.29076 10.625 3.44973 10.5592 3.56694 10.4419C3.68415 10.3247 3.75 10.1658 3.75 10ZM10 16.25C9.83424 16.25 9.67527 16.3158 9.55806 16.4331C9.44085 16.5503 9.375 16.7092 9.375 16.875V18.75C9.375 18.9158 9.44085 19.0747 9.55806 19.1919C9.67527 19.3092 9.83424 19.375 10 19.375C10.1658 19.375 10.3247 19.3092 10.4419 19.1919C10.5592 19.0747 10.625 18.9158 10.625 18.75V16.875C10.625 16.7092 10.5592 16.5503 10.4419 16.4331C10.3247 16.3158 10.1658 16.25 10 16.25ZM18.75 9.375H16.875C16.7092 9.375 16.5503 9.44085 16.4331 9.55806C16.3158 9.67527 16.25 9.83424 16.25 10C16.25 10.1658 16.3158 10.3247 16.4331 10.4419C16.5503 10.5592 16.7092 10.625 16.875 10.625H18.75C18.9158 10.625 19.0747 10.5592 19.1919 10.4419C19.3092 10.3247 19.375 10.1658 19.375 10C19.375 9.83424 19.3092 9.67527 19.1919 9.55806C19.0747 9.44085 18.9158 9.375 18.75 9.375Z"
                fill="#1C1C1C"
              />
            </svg>
</button>
<button className="hover:bg-[#1C1C1C33] p-0.5 rounded-md my-auto">

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.875 10C16.875 11.3597 16.4718 12.689 15.7164 13.8195C14.9609 14.9501 13.8872 15.8313 12.631 16.3517C11.3747 16.872 9.99238 17.0082 8.65876 16.7429C7.32514 16.4776 6.10013 15.8228 5.13864 14.8614C4.17716 13.8999 3.52238 12.6749 3.2571 11.3412C2.99183 10.0076 3.12798 8.62529 3.64833 7.36905C4.16868 6.11281 5.04987 5.03908 6.18046 4.28365C7.31105 3.52821 8.64026 3.125 10 3.125C11.8234 3.125 13.5721 3.84933 14.8614 5.13864C16.1507 6.42795 16.875 8.17664 16.875 10Z"
                fill="#1C1C1C"
                fill-opacity="0.1"
              />
              <path
                d="M10.625 6.25V9.64609L13.4469 11.3391C13.589 11.4244 13.6914 11.5628 13.7316 11.7236C13.7717 11.8845 13.7463 12.0547 13.6609 12.1969C13.5756 12.339 13.4372 12.4414 13.2764 12.4816C13.1155 12.5217 12.9453 12.4963 12.8031 12.4109L9.67812 10.5359C9.58563 10.4804 9.50911 10.4018 9.45599 10.3079C9.40287 10.214 9.37497 10.1079 9.375 10V6.25C9.375 6.08424 9.44085 5.92527 9.55806 5.80806C9.67527 5.69085 9.83424 5.625 10 5.625C10.1658 5.625 10.3247 5.69085 10.4419 5.80806C10.5592 5.92527 10.625 6.08424 10.625 6.25ZM10 2.5C9.01406 2.49754 8.03742 2.69065 7.12661 3.06815C6.21579 3.44564 5.38889 4.00003 4.69375 4.69922C4.12578 5.27422 3.62109 5.82734 3.125 6.40625V5C3.125 4.83424 3.05915 4.67527 2.94194 4.55806C2.82473 4.44085 2.66576 4.375 2.5 4.375C2.33424 4.375 2.17527 4.44085 2.05806 4.55806C1.94085 4.67527 1.875 4.83424 1.875 5V8.125C1.875 8.29076 1.94085 8.44973 2.05806 8.56694C2.17527 8.68415 2.33424 8.75 2.5 8.75H5.625C5.79076 8.75 5.94973 8.68415 6.06694 8.56694C6.18415 8.44973 6.25 8.29076 6.25 8.125C6.25 7.95924 6.18415 7.80027 6.06694 7.68306C5.94973 7.56585 5.79076 7.5 5.625 7.5H3.82812C4.38672 6.84219 4.94297 6.22266 5.57734 5.58047C6.44598 4.71184 7.55133 4.11844 8.75529 3.87444C9.95924 3.63043 11.2084 3.74662 12.3467 4.2085C13.485 4.67039 14.4619 5.45747 15.1555 6.47141C15.849 7.48535 16.2283 8.68119 16.2461 9.90949C16.2639 11.1378 15.9193 12.3441 15.2554 13.3777C14.5915 14.4113 13.6377 15.2263 12.5132 15.7209C11.3888 16.2155 10.1435 16.3678 8.93299 16.1587C7.72249 15.9496 6.60043 15.3885 5.70703 14.5453C5.64732 14.4889 5.57708 14.4448 5.50032 14.4155C5.42356 14.3862 5.34179 14.3723 5.25967 14.3747C5.17754 14.377 5.09668 14.3954 5.0217 14.429C4.94672 14.4626 4.87908 14.5106 4.82266 14.5703C4.76623 14.63 4.72212 14.7003 4.69283 14.777C4.66355 14.8538 4.64967 14.9356 4.652 15.0177C4.65432 15.0998 4.67279 15.1807 4.70636 15.2556C4.73993 15.3306 4.78795 15.3983 4.84766 15.4547C5.73785 16.2947 6.82012 16.9042 8 17.2298C9.17989 17.5554 10.4215 17.5872 11.6166 17.3226C12.8116 17.058 13.9237 16.5049 14.8559 15.7117C15.788 14.9184 16.5118 13.9091 16.9642 12.7717C17.4165 11.6344 17.5836 10.4036 17.4509 9.18686C17.3182 7.97009 16.8897 6.80429 16.2029 5.7912C15.516 4.77811 14.5916 3.94852 13.5104 3.37483C12.4292 2.80114 11.224 2.5008 10 2.5Z"
                fill="#1C1C1C"
              />
            </svg>
</button>
<button className="hover:bg-[#1C1C1C33] p-0.5 rounded-md my-auto">

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2499 15H3.7499C3.64051 14.9993 3.53321 14.97 3.43872 14.9149C3.34423 14.8597 3.26587 14.7808 3.21146 14.6859C3.15705 14.591 3.1285 14.4835 3.12866 14.3741C3.12883 14.2647 3.1577 14.1572 3.2124 14.0625C3.72725 13.1719 4.3749 10.9227 4.3749 8.125C4.3749 6.63316 4.96753 5.20242 6.02243 4.14752C7.07732 3.09263 8.50806 2.5 9.9999 2.5C11.4917 2.5 12.9225 3.09263 13.9774 4.14752C15.0323 5.20242 15.6249 6.63316 15.6249 8.125C15.6249 10.9234 16.2733 13.1719 16.789 14.0625C16.8437 14.1574 16.8726 14.2649 16.8727 14.3745C16.8728 14.484 16.8441 14.5916 16.7895 14.6865C16.7349 14.7815 16.6563 14.8604 16.5616 14.9154C16.4669 14.9705 16.3594 14.9996 16.2499 15Z"
                fill="#1C1C1C"
                fill-opacity="0.1"
              />
              <path
                d="M17.3282 13.7453C16.8946 12.9984 16.2501 10.8852 16.2501 8.125C16.2501 6.4674 15.5916 4.87769 14.4195 3.70558C13.2474 2.53348 11.6577 1.875 10.0001 1.875C8.34247 1.875 6.75276 2.53348 5.58065 3.70558C4.40855 4.87769 3.75007 6.4674 3.75007 8.125C3.75007 10.8859 3.10476 12.9984 2.67116 13.7453C2.56044 13.9352 2.50174 14.1509 2.50098 14.3707C2.50023 14.5905 2.55745 14.8066 2.66687 14.9973C2.77629 15.1879 2.93404 15.3463 3.12422 15.4565C3.31439 15.5667 3.53027 15.6248 3.75007 15.625H6.93835C7.08255 16.3306 7.46603 16.9647 8.02392 17.4201C8.58182 17.8756 9.2799 18.1243 10.0001 18.1243C10.7202 18.1243 11.4183 17.8756 11.9762 17.4201C12.5341 16.9647 12.9176 16.3306 13.0618 15.625H16.2501C16.4698 15.6247 16.6856 15.5665 16.8757 15.4562C17.0657 15.346 17.2234 15.1875 17.3327 14.9969C17.442 14.8063 17.4992 14.5903 17.4984 14.3705C17.4976 14.1508 17.4389 13.9351 17.3282 13.7453ZM10.0001 16.875C9.61243 16.8749 9.23435 16.7546 8.91788 16.5308C8.60141 16.3069 8.3621 15.9905 8.23288 15.625H11.7673C11.638 15.9905 11.3987 16.3069 11.0823 16.5308C10.7658 16.7546 10.3877 16.8749 10.0001 16.875ZM3.75007 14.375C4.35163 13.3406 5.00007 10.9438 5.00007 8.125C5.00007 6.79892 5.52686 5.52715 6.46454 4.58947C7.40222 3.65178 8.67399 3.125 10.0001 3.125C11.3262 3.125 12.5979 3.65178 13.5356 4.58947C14.4733 5.52715 15.0001 6.79892 15.0001 8.125C15.0001 10.9414 15.6469 13.3383 16.2501 14.375H3.75007Z"
                fill="#1C1C1C"
              />
            </svg>
            </button>
            <button className="hover:bg-[#1C1C1C33] p-0.5 rounded-md my-auto">


            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.875 3.75V16.25H3.125C2.95924 16.25 2.80027 16.1842 2.68306 16.0669C2.56585 15.9497 2.5 15.7908 2.5 15.625V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H6.875Z"
                fill="#1C1C1C"
                fill-opacity="0.1"
              />
              <path
                d="M16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM3.125 11.875H4.375C4.54076 11.875 4.69973 11.8092 4.81694 11.6919C4.93415 11.5747 5 11.4158 5 11.25C5 11.0842 4.93415 10.9253 4.81694 10.8081C4.69973 10.6908 4.54076 10.625 4.375 10.625H3.125V9.375H4.375C4.54076 9.375 4.69973 9.30915 4.81694 9.19194C4.93415 9.07473 5 8.91576 5 8.75C5 8.58424 4.93415 8.42527 4.81694 8.30806C4.69973 8.19085 4.54076 8.125 4.375 8.125H3.125V6.875H4.375C4.54076 6.875 4.69973 6.80915 4.81694 6.69194C4.93415 6.57473 5 6.41576 5 6.25C5 6.08424 4.93415 5.92527 4.81694 5.80806C4.69973 5.69085 4.54076 5.625 4.375 5.625H3.125V4.375H6.25V15.625H3.125V11.875ZM16.875 15.625H7.5V4.375H16.875V15.625Z"
                fill="#1C1C1C"
              />
            </svg>
            </button>
          </div>
        </div>
    );
};

export default Topbar;
