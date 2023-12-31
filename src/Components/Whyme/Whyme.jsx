import React, { useEffect } from "react";
import "./Whyme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Whyme = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="whyme">
      <div className="whyme-heading" data-aos="fade">
        why me
      </div>
      <div className="items">
        <div className="item" data-aos="fade-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M1 31.1122H26.4682"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.8918 23.0087L7.9459 24.2589L9.10354 17.2204L24.6854 1.68486C24.9007 1.46785 25.1567 1.29561 25.4389 1.17806C25.721 1.06052 26.0236 1 26.3293 1C26.6349 1 26.9375 1.06052 27.2197 1.17806C27.5018 1.29561 27.7579 1.46785 27.9731 1.68486L30.4273 4.13906C30.6443 4.3543 30.8166 4.61037 30.9341 4.89251C31.0517 5.17465 31.1122 5.47727 31.1122 5.78292C31.1122 6.08856 31.0517 6.39118 30.9341 6.67332C30.8166 6.95546 30.6443 7.21153 30.4273 7.42677L14.8918 23.0087Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h3>agency</h3>
          <p>
            In a saturated market, choose me for distinctive visual
            storytelling. I blend expertise, passion, and creativity for
            unforgettable photographic experiences.
          </p>
        </div>
        <div className="item" data-aos="fade-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="32"
            viewBox="0 0 23 32"
            fill="none"
          >
            <path
              d="M22.0226 11.4907C22.0355 9.63102 21.5503 7.80175 20.6175 6.19285C19.6846 4.58395 18.3381 3.25407 16.7178 2.34127C15.0974 1.42847 13.2623 0.966023 11.4029 1.00194C9.54344 1.03786 7.72752 1.57084 6.14363 2.54554C4.55975 3.52024 3.26562 4.90114 2.39562 6.54486C1.52562 8.18859 1.11145 10.0352 1.19611 11.8931C1.28076 13.7509 1.86117 15.5522 2.87706 17.11C3.89295 18.6678 5.3073 19.9253 6.97327 20.7519V24.2248C6.97327 24.5318 7.09524 24.8263 7.31234 25.0434C7.52944 25.2605 7.82389 25.3825 8.13092 25.3825H15.0768C15.3838 25.3825 15.6783 25.2605 15.8954 25.0434C16.1125 24.8263 16.2344 24.5318 16.2344 24.2248V20.7519C17.9651 19.8992 19.4236 18.5808 20.4461 16.9448C21.4686 15.3088 22.0146 13.42 22.0226 11.4907V11.4907Z"
              stroke="#898D92"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.97327 31.1705H16.2344"
              stroke="#898D92"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h3>Choose Idea</h3>
          <p>
            Choose me for photography that transcends the ordinary. I bring a
            unique blend of creativity and expertise to capture your
            extraordinary moments beautifully.
          </p>
        </div>
        <div className="item" data-aos="fade-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
          >
            <path
              d="M17.1647 1.72996L20.8426 9.21464C20.9263 9.40461 21.0579 9.56916 21.2243 9.6919C21.3907 9.81463 21.5861 9.89126 21.791 9.91414L29.9101 11.1266C30.1452 11.1571 30.3669 11.2543 30.5492 11.407C30.7315 11.5597 30.8669 11.7615 30.9397 11.9889C31.0124 12.2163 31.0195 12.4598 30.9601 12.6911C30.9007 12.9224 30.7772 13.1319 30.6041 13.2951L24.7518 19.1476C24.6025 19.2882 24.4904 19.4643 24.4257 19.6598C24.3611 19.8553 24.346 20.0639 24.3817 20.2668L25.7927 28.4976C25.8336 28.7341 25.8078 28.9774 25.7182 29.1999C25.6287 29.4223 25.4789 29.6149 25.2861 29.7558C25.0933 29.8967 24.8651 29.9803 24.6276 29.9969C24.39 30.0136 24.1525 29.9626 23.9422 29.85L16.6327 25.9561C16.4455 25.8634 16.2398 25.8153 16.0313 25.8153C15.8228 25.8153 15.617 25.8634 15.4299 25.9561L8.12032 29.85C7.91003 29.9626 7.67258 30.0136 7.435 29.9969C7.19742 29.9803 6.96924 29.8967 6.77642 29.7558C6.58361 29.6149 6.4339 29.4223 6.34434 29.1999C6.25478 28.9774 6.22896 28.7341 6.26981 28.4976L7.68083 20.1735C7.71659 19.9706 7.70146 19.762 7.63682 19.5665C7.57218 19.371 7.46009 19.195 7.31072 19.0543L1.38908 13.2951C1.21388 13.1274 1.09068 12.9121 1.03439 12.6753C0.978095 12.4385 0.99113 12.1904 1.07191 11.9609C1.1527 11.7314 1.29776 11.5304 1.48954 11.3824C1.68131 11.2343 1.91157 11.1455 2.15241 11.1266L10.2715 9.91414C10.4765 9.89126 10.6719 9.81463 10.8383 9.6919C11.0047 9.56916 11.1363 9.40461 11.2199 9.21464L14.8978 1.72996C14.998 1.51197 15.1579 1.32741 15.3588 1.19807C15.5596 1.06873 15.793 1 16.0313 1C16.2696 1 16.503 1.06873 16.7038 1.19807C16.9046 1.32741 17.0646 1.51197 17.1647 1.72996V1.72996Z"
              stroke="#898D92"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h3>satisfaction</h3>
          <p>
            Your satisfaction is my top priority. I strive to exceed
            expectations, ensuring your moments are not just captured but
            cherished forever with joy and fulfillment.
          </p>
        </div>
        <div className="item" data-aos="fade-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M30.8414 8.13623C30.7968 7.89448 30.7018 7.6648 30.5627 7.4621C30.4235 7.25941 30.2433 7.08824 30.0337 6.95969L25.4181 11.5736C25.2029 11.7968 24.9448 11.9744 24.6593 12.0957C24.3738 12.217 24.0668 12.2796 23.7565 12.2796C23.4463 12.2796 23.1393 12.217 22.8538 12.0957C22.5683 11.9744 22.3102 11.7968 22.095 11.5736L20.3411 10.0049C19.9182 9.57362 19.6814 8.99384 19.6814 8.39C19.6814 7.78615 19.9182 7.20637 20.3411 6.77514L24.9566 2.16126C24.8559 1.92489 24.7045 1.71351 24.5131 1.54209C24.3217 1.37068 24.0949 1.2434 23.8489 1.16928C22.2384 0.848247 20.5702 0.985667 19.0341 1.5659C17.498 2.14613 16.1557 3.14585 15.1601 4.45125C14.1644 5.75665 13.5554 7.31527 13.4025 8.94967C13.2495 10.5841 13.5586 12.2286 14.2947 13.696L1.69435 26.1765C1.47454 26.3913 1.2999 26.6479 1.18066 26.9312C1.06142 27.2144 1 27.5186 1 27.8259C1 28.1333 1.06142 28.4375 1.18066 28.7207C1.2999 29.004 1.47454 29.2606 1.69435 29.4754L2.52514 30.3059C2.74007 30.5256 2.99674 30.7002 3.2801 30.8194C3.56345 30.9386 3.86777 31 4.17519 31C4.48261 31 4.78693 30.9386 5.07029 30.8194C5.35364 30.7002 5.61032 30.5256 5.82524 30.3059L18.4256 17.7331C19.8939 18.4324 21.5275 18.7109 23.1446 18.5376C24.7618 18.3643 26.2992 17.746 27.5858 16.7515C28.8725 15.7569 29.858 14.4251 30.4327 12.9042C31.0075 11.3832 31.1489 9.73275 30.8414 8.13623V8.13623Z"
              stroke="#898D92"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h3>Quality</h3>
          <p>
            Embrace uncompromising quality. I deliver photographs that
            resonate with excellence, ensuring your memories are preserved in
            the highest standard of visual artistry.
          </p>
        </div>
        <div className="item" data-aos="fade-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="32"
            viewBox="0 0 23 32"
            fill="none"
          >
            <path
              d="M13.8333 1V12.5385H22L9.16667 31V19.4615H1L13.8333 1Z"
              stroke="#898D92"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h3>creativity</h3>
          <p>
            Experience boundless creativity in every frame. I infuse passion
            and innovation to craft visually stunning and uniquely artistic
            photographs that tell your story with flair.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyme;
