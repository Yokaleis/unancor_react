import { Link, useLocation } from "react-router-dom";

const ItemsSidebar = [
  {
    title: "Dashboard",
    link: "/HomeAnunciante",
    Icon: ({ selectedMenu }) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="mx-auto h-9 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          d="M20.2652 9H2.62983C2.31492 9 2 8.7 2 8.4V3.6C2 3.3 2.31492 3 2.62983 3H20.3702C20.6851 3 21 3.3 21 3.6V8.5C20.895 8.7 20.5801 9 20.2652 9Z"
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          d="M9.30864 21H2.59259C2.2963 21 2 20.7 2 20.4V12.6C2 12.3 2.2963 12 2.59259 12H9.40741C9.7037 12 10 12.3 10 12.6V20.5C9.90123 20.7 9.60494 21 9.30864 21Z"
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          d="M20.4074 21H13.5926C13.2963 21 13 20.7 13 20.4V12.6C13 12.3 13.2963 12 13.5926 12H20.4074C20.7037 12 21 12.3 21 12.6V20.5C21 20.7 20.7037 21 20.4074 21Z"
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
      </svg>
    ),
  },
  {
    title: "Affinity",
    link: "/HomeSerps/Propuestos",
    Icon: ({ selectedMenu }) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="mx-auto h-9 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0816 10.7804C13.0004 10.7804 13.7452 10.0356 13.7452 9.11676C13.7452 8.19796 13.0004 7.45312 12.0816 7.45312C11.1628 7.45312 10.418 8.19796 10.418 9.11676C10.418 10.0356 11.1628 10.7804 12.0816 10.7804Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M15.4822 15.0621L15.0731 13.053C14.9095 12.2439 14.1913 11.6621 13.3731 11.6621H13.1458C12.864 11.9076 12.4913 12.0712 12.0822 12.0712C11.6731 12.0712 11.3095 11.9167 11.0186 11.6621H10.6276C9.80038 11.6621 9.09128 12.2439 8.92765 13.053L8.51856 15.0621C8.45492 15.3621 8.68219 15.6348 8.98219 15.6348H15.0095C15.3186 15.6348 15.5458 15.3621 15.4822 15.0621Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M3.81836 10.2722V4.77219C3.81836 4.37219 4.14563 4.04492 4.54563 4.04492H9.97291"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M9.91836 19.5011H4.54563C4.14563 19.5011 3.81836 19.1738 3.81836 18.7738V13.9102"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M20.1813 13.9102V18.7829C20.1813 19.1829 19.854 19.5102 19.454 19.5102H13.5449"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M13.5996 4.04492H19.4542C19.8542 4.04492 20.1814 4.37219 20.1814 4.77219V10.2722"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M13.1453 5.63636H10.8544C10.4816 5.63636 10.1816 5.33636 10.1816 4.96364V2.67273C10.1816 2.3 10.4816 2 10.8544 2H13.1453C13.518 2 13.818 2.3 13.818 2.67273V4.96364C13.818 5.33636 13.518 5.63636 13.1453 5.63636Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M13.1453 21.0914H10.8544C10.4816 21.0914 10.1816 20.7914 10.1816 20.4187V18.1278C10.1816 17.7551 10.4816 17.4551 10.8544 17.4551H13.1453C13.518 17.4551 13.818 17.7551 13.818 18.1278V20.4187C13.818 20.7914 13.518 21.0914 13.1453 21.0914Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M21.3269 13.5914H19.036C18.6633 13.5914 18.3633 13.2914 18.3633 12.9187V10.6278C18.3633 10.2551 18.6633 9.95508 19.036 9.95508H21.3269C21.6996 9.95508 21.9996 10.2551 21.9996 10.6278V12.9187C21.9996 13.2914 21.6996 13.5914 21.3269 13.5914Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M4.96364 13.5914H2.67273C2.3 13.5914 2 13.2914 2 12.9187V10.6278C2 10.2551 2.3 9.95508 2.67273 9.95508H4.96364C5.33636 9.95508 5.63636 10.2551 5.63636 10.6278V12.9187C5.63636 13.2914 5.33636 13.5914 4.96364 13.5914Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
      </svg>
    ),
  },
  {
    title: "Project Manager",
    Icon: ({ selectedMenu }) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="mx-auto h-9 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.207 7.408C18.3115 7.5505 18.4825 7.6265 18.663 7.617L19.9645 7.522L20.8765 9.6025L19.936 10.505C19.8125 10.6285 19.7555 10.7995 19.784 10.9705C19.9455 11.854 19.974 12.766 19.8505 13.659C19.8315 13.83 19.898 14.001 20.0215 14.115L21 14.9605L20.183 17.079L18.8815 17.041C18.701 17.0315 18.53 17.1265 18.435 17.269C17.941 18.0195 17.314 18.6655 16.592 19.1975C16.4495 19.302 16.3735 19.473 16.383 19.6535L16.478 20.955L14.3975 21.867L13.495 20.9265C13.3715 20.803 13.2005 20.746 13.0295 20.7745C12.146 20.936 11.234 20.9645 10.341 20.841C10.17 20.822 9.999 20.8885 9.885 21.012L9.0395 22L6.921 21.183L6.959 19.8815C6.9685 19.701 6.8735 19.53 6.731 19.435C5.9805 18.941 5.3345 18.314 4.8025 17.592C4.698 17.4495 4.527 17.3735 4.3465 17.383L3.045 17.478L2.133 15.3975L3.0735 14.495C3.197 14.3715 3.254 14.2005 3.2255 14.0295C3.064 13.146 3.0355 12.234 3.159 11.341C3.178 11.17 3.1115 10.999 2.988 10.885L2 10.0395L2.817 7.921L4.1185 7.959C4.299 7.959 4.47 7.8735 4.565 7.731C5.0685 6.99 5.686 6.3345 6.408 5.8025C6.5505 5.698 6.6265 5.527 6.617 5.3465L6.522 4.045L8.6025 3.133L9.505 4.0735C9.6285 4.197 9.7995 4.254 9.9705 4.2255C10.854 4.064 11.766 4.0355 12.659 4.159C12.8395 4.178 13.0105 4.1115 13.1245 3.9785L13.97 3L16.0885 3.817L16.0505 5.1185C16.041 5.299 16.136 5.47 16.2785 5.565C17.0195 6.0685 17.675 6.686 18.207 7.408Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M11.6428 12.1196C12.6029 12.1196 13.3813 11.3412 13.3813 10.3811C13.3813 9.42093 12.6029 8.64258 11.6428 8.64258C10.6826 8.64258 9.9043 9.42093 9.9043 10.3811C9.9043 11.3412 10.6826 12.1196 11.6428 12.1196Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M15.2062 16.594L14.7787 14.4945C14.6077 13.649 13.8572 13.041 13.0022 13.041H12.7647C12.4702 13.2975 12.0807 13.4685 11.6532 13.4685C11.2257 13.4685 10.8457 13.307 10.5417 13.041H10.1332C9.2687 13.041 8.5277 13.649 8.3567 14.4945L7.9292 16.594C7.8627 16.9075 8.1002 17.1925 8.4137 17.1925H14.7122C15.0352 17.1925 15.2727 16.898 15.2062 16.594Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
      </svg>
    ),
  },
  {
    title: "Marketplace",
    link: "/CompraArticulo",
    Icon: ({ selectedMenu }) => (
      <svg
        className="mx-auto h-9 w-6"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.62 18.6H14.97M7.95 15.17H19.12C19.53 15.17 19.87 14.86 19.91 14.46L20.7 6.54C20.74 6.11 20.43 5.72 19.99 5.67C19.96 5.67 19.94 5.67 19.91 5.67H7.39L7.25 3.25C7.22 2.83 6.88 2.5 6.46 2.5H3.29C2.85 2.5 2.5 2.85 2.5 3.29C2.5 3.73 2.85 4.08 3.29 4.08H5.71V16.6C5.69333 17.48 5.994 19.216 7.33 19.12M7.33 19.12C7.33 19.95 8 20.62 8.83 20.62C9.66 20.62 10.33 19.95 10.33 19.12C10.33 18.29 9.66 17.62 8.83 17.62C8 17.62 7.33 18.29 7.33 19.12ZM9.61 7.6V13.6M12.61 7.6V13.6M15.61 7.6V13.6M16.75 20.62C15.92 20.62 15.25 19.95 15.25 19.12C15.25 18.29 15.92 17.62 16.75 17.62C17.58 17.62 18.25 18.29 18.25 19.12C18.25 19.95 17.58 20.62 16.75 20.62Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Booster",
    Icon: ({ selectedMenu }) => (
      <svg
        className="mx-auto h-9 w-6"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8309 6.58961V4.09961C16.6409 4.09961 20.5309 7.99961 20.5309 12.7996C20.5309 17.5996 16.6309 21.4996 11.8309 21.4996C7.03086 21.4996 3.13086 17.5996 3.13086 12.7996C3.13086 12.0196 3.23086 11.2496 3.43086 10.5296H5.98086"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M11.8293 14.35C12.6853 14.35 13.3793 13.656 13.3793 12.8C13.3793 11.944 12.6853 11.25 11.8293 11.25C10.9733 11.25 10.2793 11.944 10.2793 12.8C10.2793 13.656 10.9733 14.35 11.8293 14.35Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M10.66 11.73L2.5 3.5"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M14.9902 9.28008L16.6902 7.58008"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M16.7207 10.7898L18.4107 9.08984"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Tracker",
    Icon: ({ selectedMenu }) => (
      <svg
        className="mx-auto h-9 w-6"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.93 21H6.07C5.2 21 4.5 20.3 4.5 19.43V4.07C4.5 3.2 5.2 2.5 6.07 2.5H17.94C18.81 2.5 19.51 3.2 19.51 4.07V19.44C19.5 20.3 18.8 21 17.93 21Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M7 7L8 8L10 5"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 12L8 13L10 10"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 17L8 18L10 15"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 18H17"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 7H17"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 13H17"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Control de enlaces",
    Icon: ({ selectedMenu }) => (
      <svg
        className="mx-auto h-9 w-6"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.29 11.9902V20.1302C6.29 20.6102 5.9 21.0002 5.42 21.0002H3.87C3.39 21.0002 3 20.6102 3 20.1302V12.2202"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M3 9.22V3.37C3 2.89 3.39 2.5 3.87 2.5H5.42C5.9 2.5 6.29 2.89 6.29 3.37V8.99"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M7.79 8.82031H1.5V11.8203H7.79V8.82031Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M13.4795 17.6504V20.3004C13.4795 20.6904 13.1595 21.0104 12.7695 21.0104H10.8995C10.5095 21.0104 10.1895 20.6904 10.1895 20.3004V17.7304"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <path
          d="M10.1895 14.72V3.21C10.1895 2.82 10.4995 2.5 10.8995 2.5H12.7795C13.1695 2.5 13.4895 2.82 13.4895 3.21V14.65"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M14.9795 14.8203H8.68945V17.8203H14.9795V14.8203Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M20.6691 8.25977V20.1998C20.6691 20.6398 20.3091 20.9998 19.8691 20.9998H18.1691C17.7291 20.9998 17.3691 20.6398 17.3691 20.1998V8.29977"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M17.3809 4.3V3.3C17.3809 2.86 17.7409 2.5 18.1809 2.5H19.8809C20.3209 2.5 20.6809 2.86 20.6809 3.3V4.26"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M22.1709 4.82031H15.8809V7.82031H22.1709V4.82031Z"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Inversión",
    Icon: ({ selectedMenu }) => (
      <svg
        className="mx-auto h-9 w-6"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.78 14.25C3.6 13.53 3.5 12.78 3.5 12C3.5 7.03 7.53 3 12.5 3C14.44 3 16.23 3.61 17.7 4.65"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M21.2409 9.85938C21.4109 10.5394 21.5009 11.2594 21.5009 11.9994C21.5009 16.9694 17.4709 20.9994 12.5009 20.9994C10.9509 20.9994 9.48094 20.6094 8.21094 19.9094"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M2 15.75L5 16.5V13.5"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.2695 9.99984L20.8495 7.33984L22.9795 9.44984"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.9902 8.5H11.9902C10.8902 8.5 9.99023 9.4 9.99023 10.5C9.99023 11.6 10.8902 12.5 11.9902 12.5H12.9902C14.0902 12.5 14.9902 13.4 14.9902 14.5C14.9902 15.6 14.0902 16.5 12.9902 16.5H9.99023"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M11.4902 6.5V17.5"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M13.4902 6.5V17.5"
          className={
            selectedMenu
              ? "stroke-current text-unancor-blue"
              : "stroke-current text-white"
          }
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function Sidebar() {
  const location = useLocation();
  let basePath = "/" + location.pathname.split("/")[1]

  return (
    <div className="bg-unancor-blue w-20 flex flex-col h-full absolute z-10">
      <div className="mt-20 w-full space-y-2">
        {ItemsSidebar.map(({ title, Icon, link }, index) => {
          let linkBasePath = link ? "/" + link.split("/")[1] : ""
          return (
            <Link
            className={
              basePath === linkBasePath
                ? "cursor-pointer text-center block bg-gray-200"
                : "cursor-pointer text-center block"
            }
            key={index}
            to={link || ""}
          >
            <Icon selectedMenu={basePath === linkBasePath} />
            <p
              className={
                basePath === linkBasePath
                  ? "text-xxs mx-auto text-unancor-blue"
                  : "text-xxs mx-auto text-white"
              }
            >
              {title}
            </p>
          </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Sidebar;
