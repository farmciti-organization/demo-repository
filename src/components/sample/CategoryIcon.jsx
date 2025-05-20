import { useState } from "react";

export const Animals = () => (
  <svg
    width="78"
    height="77"
    viewBox="0 0 78 77"
    fill="#fafafa"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60.1639 32.908C60.1639 32.908 62.0922 60.4198 41.6841 64.495C21.276 68.5702 14.9324 58.8895 14.9324 58.8895C11.1982 57.3935 8.344 54.565 6.16316 50.7391C5.79586 50.0943 6.14786 49.226 6.82889 49.1228L10.8998 48.5038C10.9687 48.4952 10.9687 48.3834 10.8998 48.3662C6.8748 47.5409 4.42614 44.8928 3.26302 40.7575C3.10998 40.2244 3.43902 39.6656 3.9364 39.6312L8.12209 39.3475C8.39757 39.3303 8.49705 38.9176 8.26748 38.7457C4.80874 36.2094 2.74268 33.0198 3.02581 28.721C3.05641 28.2568 3.52319 27.9903 3.86753 28.2482C5.99481 29.8129 12.6598 34.0945 22.7682 34.8338C29.6933 35.3411 36.3277 31.6356 40.345 25.2821L47.9895 13.2026L49.3898 10.9931C51.6395 8.91252 54.8763 8.87813 57.1643 10.9071L57.5546 11.251C58.7483 13.0995 60.2787 14.647 62.031 15.7991L64.648 17.51C65.0689 17.7851 65.0383 18.4815 64.6021 18.7222C63.4467 19.3584 62.2759 19.8571 61.0822 20.2268C60.1486 20.5191 59.8043 21.0779 59.8196 22.6341L60.1563 32.8994L60.1639 32.908Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.3503 46.131C39.3503 46.131 35.85 55.1361 24.9243 57.4093C15.8992 59.2833 11.8028 57.0929 11.8028 57.0929"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M58.8729 9.81412C59.7959 7.92483 60.5958 5.90209 60.9573 3.90042C61.3804 1.54759 58.5653 -0.109933 56.5116 1.26665L54.658 2.50979C53.7734 3.09976 52.5659 3.01548 51.789 2.30611L49.6969 0.402774C48.5355 -0.447056 46.8357 0.114815 46.4742 1.46331L46.1434 3.40176C45.9511 4.53955 45.0435 5.45259 43.8514 5.70544L42.3977 6.01446C40.121 6.49908 39.2441 9.08369 40.744 10.7763C41.7439 11.9071 42.9899 12.9817 44.4359 14.0001"
      fill="currentColor"
    />
    <path
      d="M40.3527 25.2908C40.3527 25.2908 39.5186 30.9049 44.5231 30.7502C48.6016 30.6212 49.8106 33.5099 50.5452 34.6964C51.892 36.8629 56.3379 39.4594 60.141 37.4648"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43.9471 65.9695V74.9695H48.9471"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.9471 65.9695V74.9695H36.9471"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Experience = () => (
  <svg
    width="72"
    height="64"
    viewBox="0 0 72 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M66.3746 21H5.62544C4.17545 21 3 22.8311 3 25.09V25.91C3 28.1688 4.17545 30 5.62544 30H66.3746C67.8245 30 69 28.1688 69 25.91V25.09C69 22.8311 67.8245 21 66.3746 21Z"
      stroke="currentColor"
      stroke-width="5.56"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M15.1954 21C15.0674 20.2877 15 19.563 15 18.8259C15 10.086 24.3985 3 36 3C47.6015 3 57 10.086 57 18.8259C57 19.5568 56.9326 20.2753 56.8046 20.9814"
      stroke="currentColor"
      stroke-width="5.56"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M10.5499 40.1656C19.5272 32.8854 36.9473 35.4312 36.9473 35.4312C36.9474 35.433 36.9461 35.4472 36.9464 35.4732C42.1681 35.056 53.8674 34.8492 60.6905 40.3824C69.6678 47.6625 66.8067 62.9566 66.8067 62.9566C66.8067 62.9566 51.9188 66.4395 42.9415 59.1578C38.8861 55.8698 36.733 50.7762 35.588 46.1802C34.4264 50.7305 32.2774 55.7153 28.2989 58.941C19.3216 66.221 4.43368 62.7378 4.43368 62.7378C4.42693 62.7017 1.58322 47.4352 10.5499 40.1636V40.1656Z"
      fill="currentColor"
    />
  </svg>
);

export const FamilyFriendly = () => (
  <svg
    width="69"
    height="73"
    viewBox="0 0 69 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M61.3052 21.4719C59.2288 24.3253 55.8792 26.1862 52.079 26.1862C47.1622 26.1862 42.9768 23.0651 41.3771 18.7033C38.5367 20.3357 36.2252 22.7843 34.7757 25.7422C33.2478 22.6276 30.7665 20.068 27.7042 18.4421C26.1763 22.941 21.9255 26.1862 16.9043 26.1862C13.2543 26.1862 10.0156 24.4689 7.92616 21.8049C5.2164 24.7301 3.55789 28.6544 3.55789 32.9639C3.55789 37.2734 5.12498 40.9756 7.71069 43.8813C8.30488 44.5473 8.9513 45.1676 9.64996 45.7357L34.5014 69.5228L59.1048 46.3494C63.2772 43.3654 66 38.4879 66 32.9639C66 28.4911 64.2109 24.4363 61.3118 21.4719H61.3052Z"
      fill="#E9E9E9"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M16.9042 26.1797C23.2078 26.1797 28.3178 21.0697 28.3178 14.7661C28.3178 8.46248 23.2078 3.35242 16.9042 3.35242C10.6006 3.35242 5.49051 8.46248 5.49051 14.7661C5.49051 21.0697 10.6006 26.1797 16.9042 26.1797Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M34.495 47.1525C39.3344 47.1525 43.2576 43.2293 43.2576 38.3899C43.2576 33.5504 39.3344 29.6272 34.495 29.6272C29.6555 29.6272 25.7323 33.5504 25.7323 38.3899C25.7323 43.2293 29.6555 47.1525 34.495 47.1525Z"
      fill="white"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M20.0059 55.5234C20.0059 50.9004 23.7538 47.1525 28.3767 47.1525H41.1747C45.7976 47.1525 49.5456 50.9004 49.5456 55.5234L34.4884 69.5227L19.9993 55.5234H20.0059Z"
      fill="white"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M52.0791 26.1797C58.3826 26.1797 63.4927 21.0697 63.4927 14.7661C63.4927 8.46248 58.3826 3.35242 52.0791 3.35242C45.7755 3.35242 40.6654 8.46248 40.6654 14.7661C40.6654 21.0697 45.7755 26.1797 52.0791 26.1797Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
  </svg>
);

export const FarmersMarket = () => (
  <svg
    width="76"
    height="65"
    viewBox="0 0 76 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M67.1444 0.487305L67.3651 0.496094C68.4598 0.581618 69.4146 1.29815 69.7968 2.3418L75.4892 17.8906C75.8063 18.757 75.6807 19.7242 75.1523 20.4805C74.6238 21.2367 73.7585 21.6865 72.8358 21.6865H3.4003C2.4778 21.6865 1.61338 21.2366 1.08487 20.4805C0.556422 19.7242 0.429833 18.757 0.746979 17.8906L6.43936 2.3418L6.52335 2.13672C6.98003 1.13815 7.98123 0.487305 9.09268 0.487305H67.1444ZM11.0663 6.1377L7.44327 16.0371H68.7939L65.1698 6.1377H11.0663Z"
      fill="currentColor"
    />
    <path
      d="M12 21.1658V33.1658H20V28.1025V21.1658"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M56 20.1658V33.1658H64V20.1658L63.9671 22.2625"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M70 34H6V62H70V34Z"
      fill="#E9E9E9"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M56 44H20V53H56V44Z"
      fill="#FAFAFA"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
  </svg>
);

export const FarmStay = () => (
  <svg
    width="78"
    height="77"
    viewBox="0 0 78 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 71.6074C20.2236 53.3983 44.5843 39.4329 74 39.4329"
      stroke="currentColor"
      stroke-width="5.56"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 50.1241C11.5414 49.6502 19.5429 51.6 24 55.047"
      stroke="currentColor"
      stroke-width="5.56"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 36.594C14.4943 37.5047 24.9542 40.5349 33.4123 45.072C35.0138 45.933 35.5486 46.043 37 47.0034"
      stroke="currentColor"
      stroke-width="5.56"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.5 36.5V16.5L26 4L42 16.5V43.5"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.5 3.47314H55.79C56.658 3.47314 57.4834 3.84904 58.0531 4.50379L65.7631 13.3638C66.2383 13.9098 66.5 14.6093 66.5 15.3331V38.4866"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-linecap="round"
    />
    <path
      d="M20 37.0672V31.042C20 27.3141 23.0221 24.292 26.75 24.292V24.292C30.4779 24.292 33.5 27.3141 33.5 31.042V43.6913"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-linecap="round"
    />
    <path
      d="M75 52.208C63.6667 52.5234 39.3 57.2234 32.5 73.5"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-linecap="round"
    />
  </svg>
);

export const Festival = () => (
  <svg
    width="86"
    height="74"
    viewBox="0 0 86 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M43.5 52C47.6392 52 51 55.405 51 59.5987V71H36V59.5987C36 55.405 39.3608 52 43.5 52Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M44 4V18"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M61.0078 13H44.0078V7.17127L44.0077 3L52.66 3H61.0078L58.5947 8L61.0078 13Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linejoin="round"
    />
    <path
      d="M43.5 18L74.2439 43.5H12.7561L43.5 18Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-linejoin="round"
    />
    <rect
      x="12"
      y="43"
      width="62"
      height="28"
      rx="3"
      stroke="currentColor"
      stroke-width="5.65"
    />
    <path
      d="M43 21L35 42"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-linecap="round"
    />
    <path
      d="M44 21L53 42"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-linecap="round"
    />
    <path
      d="M3 71H83"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-linecap="round"
    />
  </svg>
);

export const PYOFarms = () => (
  <svg
    width="72"
    height="80"
    viewBox="0 0 72 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M46.5 61.5C51.0067 52.88 53.4882 45.7624 54.5 35.3768C54.5 29.5 55 17.297 37.2385 17.297C19.8664 17.297 19.5 29 19.5 36C19.5 44.5814 23.2504 53.7992 27 61.5"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.864 17.5419L31.439 8.52842C30.9794 5.61542 33.4063 3 36.5739 3C39.7184 3 42.1387 5.57905 41.7188 8.47551L40.4127 17.4526"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.5547 10.0591C30.2387 8.01242 27.3919 7.26516 24.9484 8.52162C22.1511 9.95993 21.1757 13.359 22.8752 15.7429L25.6791 19.6743"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M42 9.15215C43.316 7.10544 46.1628 6.35818 48.6063 7.61464C51.4036 9.05295 52.379 12.452 50.6795 14.836L47.8756 18.7674"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43.3028 61.6772C42.733 61.7702 42.1861 61.9263 41.6719 62.1422C40.4177 60.8303 38.6002 60 36.5731 60C34.3462 60 32.3748 60.9964 31.1238 62.5374C30.0825 61.9363 28.8577 61.5842 27.5445 61.5842C25.5338 61.5842 23.7327 62.3979 22.4817 63.6899C21.9119 63.5471 21.3191 63.4641 20.7002 63.4641C18.2408 63.4641 16.0893 64.6797 14.8842 66.503C13.8232 65.9152 12.6475 65.583 11.4064 65.583C6.76273 65.583 3 70.1763 3 75.8424C3 76.5432 3.55999 77.1111 4.25097 77.1111H67.749C68.44 77.1111 69 76.5432 69 75.8424C69 70.1763 65.2373 65.583 60.5936 65.583C59.3525 65.583 58.1768 65.9152 57.1158 66.503C55.9107 64.683 53.7592 63.4641 51.2998 63.4641C50.6841 63.4641 50.0881 63.5471 49.5183 63.6899C48.2673 62.4013 46.4629 61.5842 44.4555 61.5842C44.0625 61.5842 43.6761 61.6174 43.3028 61.6772Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35 35H22"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M43 49H51"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Wedding = () => (
  <svg
    width="75"
    height="81"
    viewBox="0 0 75 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.8965 40.7003C26.5622 40.6787 26.2226 40.6706 25.8802 40.6733C18.3328 40.7353 12.09 46.8243 11.8501 54.3661C11.5886 62.552 18.2789 69.2394 26.4625 68.9779C34.1151 68.7326 40.242 62.3202 40.1557 54.6652C40.1557 54.6113 40.1557 54.5574 40.153 54.5035C40.0695 50.7434 42.0507 47.2421 45.3635 45.4604L46.6816 44.7515C48.2531 47.9725 49.0941 51.614 48.9916 55.4631C48.6547 67.9186 38.2662 77.9294 25.8048 77.827C13.3434 77.7245 3.10042 67.5682 3.00069 55.013C2.90365 42.4254 13.1089 31.9941 25.697 31.8297C28.4599 31.7946 31.1123 32.2448 33.576 33.1019L26.8992 40.6976L26.8965 40.7003Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
    />
    <path
      d="M48.806 67.9821C49.1429 67.9875 49.4798 67.9794 49.8221 67.9578C57.3556 67.5212 63.2881 61.1309 63.1533 53.5871C63.0078 45.3991 55.9945 39.052 47.8329 39.7204C40.2024 40.3457 34.402 47.054 34.8683 54.6921C34.871 54.746 34.8764 54.7999 34.879 54.8539C35.1513 58.6055 33.3427 62.2009 30.1244 64.1441L28.8441 64.9177C27.1137 61.7805 26.0922 58.1824 26.0059 54.3337C25.7229 41.8765 35.5987 31.3653 48.0486 30.8479C60.5901 30.3277 71.2394 39.9684 71.9618 52.501C72.6868 65.0659 63.0105 75.9922 50.4474 76.7819C47.6901 76.9544 45.019 76.6363 42.515 75.9005L48.806 67.9821Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
    />
    <path
      d="M37 6.75C37 6.75 37 6.75 35.9867 5.5C34.8133 4.05 33.08 3 31 3C27.68 3 25 5.5125 25 8.625C25 9.7875 25.3733 10.8625 26.0133 11.75C27.0933 13.2625 37 23 37 23M37 6.75L38.0133 5.5C39.1867 4.05 40.92 3 43 3C46.32 3 49 5.5125 49 8.625C49 9.7875 48.6267 10.8625 47.9867 11.75C46.9067 13.2625 37 23 37 23"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Winery = () => (
  <svg
    width="60"
    height="81"
    viewBox="0 0 60 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.5746 43.4011C31.8704 44.5522 36.2809 42.0216 37.4258 37.7489C38.5706 33.4762 36.0163 29.0793 31.7205 27.9283C27.4248 26.7772 23.0143 29.3078 21.8694 33.5805C20.7245 37.8533 23.2788 42.2501 27.5746 43.4011Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.3442 48.4305C50.64 49.5816 55.0505 47.051 56.1954 42.7783C57.3403 38.5056 54.7859 34.1087 50.4902 32.9577C46.1944 31.8066 41.7839 34.3373 40.639 38.61C39.4941 42.8827 42.0485 47.2795 46.3442 48.4305Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.80501 38.3718C13.1008 39.5229 17.5113 36.9923 18.6562 32.7196C19.801 28.4469 17.2467 24.05 12.9509 22.899C8.65517 21.7479 4.24466 24.2785 3.09979 28.5512C1.95492 32.824 4.50923 37.2208 8.80501 38.3718Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.8404 62.3257C35.1362 63.4767 39.5467 60.9461 40.6916 56.6734C41.8365 52.4007 39.2822 48.0039 34.9864 46.8528C30.6906 45.7018 26.2801 48.2324 25.1352 52.5051C23.9904 56.7778 26.5447 61.1746 30.8404 62.3257Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.5478 77.0896C22.8436 78.2407 27.2541 75.7101 28.399 71.4373C29.5438 67.1646 26.9895 62.7678 22.6937 61.6168C18.398 60.4657 13.9875 62.9963 12.8426 67.269C11.6977 71.5417 14.252 75.9386 18.5478 77.0896Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.0785 57.2986C16.3743 58.4496 20.7848 55.919 21.9297 51.6463C23.0746 47.3736 20.5203 42.9768 16.2245 41.8257C11.9287 40.6747 7.51819 43.2053 6.37332 47.478C5.22845 51.7507 7.78277 56.1475 12.0785 57.2986Z"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.043 18.0171C27.2616 16.2679 27.0569 14.2204 27.6024 12.1845C28.8149 7.65942 38.3697 3.11346 38.3697 3.11346C38.3697 3.11346 39.83 4.96737 40.8326 6.70385"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.3888 6.62244C18.3686 5.52378 17.7177 5.93818 17.7177 5.93818C17.7177 5.93818 16.1283 17.0955 19.497 21.147C22.8636 25.2059 28.5123 26.1572 32.1099 23.2735C32.6827 22.8165 33.1509 22.2913 33.5508 21.7157C33.6093 22.4141 33.7522 23.1031 34.0198 23.7852C35.6935 28.0814 41.063 30.0744 46.0061 28.2501C50.9513 26.4182 55.1514 15.9685 55.1514 15.9685C55.1514 15.9685 44.8744 10.8692 39.9293 12.7011C38.349 13.2817 37.01 14.1841 35.9617 15.2848"
      stroke="currentColor"
      stroke-width="5.65"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
