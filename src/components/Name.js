import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

const Name = () => {
  const bigScreen = useMediaQuery({ minWidth: 600 });

  return (
    <Fragment>
      {bigScreen ? (
        <svg
          className="logo"
          width="520"
          height="75"
          viewBox="0 0 520 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1"
            maskUnits="userSpaceOnUse"
            x="0.944"
            y="0.768005"
            width="519"
            height="74"
            fill="black"
          >
            <rect fill="white" x="0.944" y="0.768005" width="519" height="74" />
            <path d="M44.28 38.344C48.696 39.304 52.088 41.224 54.456 44.104C56.888 46.92 58.104 50.568 58.104 55.048C58.104 60.808 55.96 65.256 51.672 68.392C47.448 71.464 41.176 73 32.856 73H1.944V5.8H30.936C38.424 5.8 44.216 7.304 48.312 10.312C52.472 13.32 54.552 17.576 54.552 23.08C54.552 26.792 53.624 29.96 51.768 32.584C49.976 35.144 47.48 37.064 44.28 38.344ZM9.048 11.656V36.04H30.456C35.896 36.04 40.088 35.016 43.032 32.968C45.976 30.856 47.448 27.816 47.448 23.848C47.448 19.88 45.976 16.872 43.032 14.824C40.088 12.712 35.896 11.656 30.456 11.656H9.048ZM32.76 67.144C38.776 67.144 43.32 66.12 46.392 64.072C49.464 62.024 51 58.824 51 54.472C51 46.088 44.92 41.896 32.76 41.896H9.048V67.144H32.76Z" />
            <path d="M79.407 32.392C81.007 29 83.375 26.44 86.511 24.712C89.711 22.984 93.647 22.12 98.319 22.12V28.744L96.687 28.648C91.375 28.648 87.215 30.28 84.207 33.544C81.199 36.808 79.695 41.384 79.695 47.272V73H72.879V22.504H79.407V32.392Z" />
            <path d="M154.16 49.864H111.92C112.304 55.112 114.319 59.368 117.967 62.632C121.615 65.832 126.224 67.432 131.792 67.432C134.928 67.432 137.808 66.888 140.432 65.8C143.056 64.648 145.327 62.984 147.247 60.808L151.088 65.224C148.848 67.912 146.031 69.96 142.639 71.368C139.311 72.776 135.632 73.48 131.6 73.48C126.416 73.48 121.807 72.392 117.775 70.216C113.807 67.976 110.704 64.904 108.464 61C106.224 57.096 105.104 52.68 105.104 47.752C105.104 42.824 106.159 38.408 108.271 34.504C110.447 30.6 113.392 27.56 117.104 25.384C120.88 23.208 125.103 22.12 129.775 22.12C134.447 22.12 138.64 23.208 142.352 25.384C146.064 27.56 148.976 30.6 151.088 34.504C153.2 38.344 154.256 42.76 154.256 47.752L154.16 49.864ZM129.775 27.976C124.911 27.976 120.816 29.544 117.488 32.68C114.224 35.752 112.368 39.784 111.92 44.776H147.728C147.28 39.784 145.392 35.752 142.064 32.68C138.8 29.544 134.703 27.976 129.775 27.976Z" />
            <path d="M194.721 69.928C193.441 71.08 191.841 71.976 189.921 72.616C188.065 73.192 186.113 73.48 184.065 73.48C179.329 73.48 175.681 72.2 173.121 69.64C170.561 67.08 169.281 63.464 169.281 58.792V28.264H160.257V22.504H169.281V11.464H176.097V22.504H191.457V28.264H176.097V58.408C176.097 61.416 176.833 63.72 178.305 65.32C179.841 66.856 182.017 67.624 184.833 67.624C186.241 67.624 187.585 67.4 188.865 66.952C190.209 66.504 191.361 65.864 192.321 65.032L194.721 69.928Z" />
            <path d="M232.409 69.928C231.129 71.08 229.529 71.976 227.609 72.616C225.753 73.192 223.801 73.48 221.753 73.48C217.017 73.48 213.369 72.2 210.809 69.64C208.249 67.08 206.969 63.464 206.969 58.792V28.264H197.945V22.504H206.969V11.464H213.785V22.504H229.145V28.264H213.785V58.408C213.785 61.416 214.521 63.72 215.993 65.32C217.529 66.856 219.705 67.624 222.521 67.624C223.929 67.624 225.273 67.4 226.553 66.952C227.897 66.504 229.049 65.864 230.008 65.032L232.409 69.928Z" />
            <path d="M300.565 73.576C293.909 73.576 287.893 72.104 282.517 69.16C277.205 66.216 273.013 62.152 269.941 56.968C266.933 51.72 265.43 45.864 265.43 39.4C265.43 32.936 266.933 27.112 269.941 21.928C273.013 16.68 277.237 12.584 282.613 9.64001C287.989 6.69601 294.005 5.22401 300.661 5.22401C305.653 5.22401 310.262 6.05601 314.486 7.72001C318.71 9.38401 322.293 11.816 325.237 15.016L320.725 19.528C315.477 14.216 308.854 11.56 300.854 11.56C295.542 11.56 290.71 12.776 286.358 15.208C282.006 17.64 278.582 20.968 276.086 25.192C273.654 29.416 272.438 34.152 272.438 39.4C272.438 44.648 273.654 49.384 276.086 53.608C278.582 57.832 282.006 61.16 286.358 63.592C290.71 66.024 295.542 67.24 300.854 67.24C308.918 67.24 315.541 64.552 320.725 59.176L325.237 63.688C322.293 66.888 318.677 69.352 314.389 71.08C310.165 72.744 305.557 73.576 300.565 73.576Z" />
            <path d="M355.855 22.12C362.447 22.12 367.503 23.784 371.023 27.112C374.543 30.376 376.303 35.24 376.303 41.704V73H369.776V65.128C368.24 67.752 365.968 69.8 362.96 71.272C360.016 72.744 356.496 73.48 352.4 73.48C346.768 73.48 342.288 72.136 338.96 69.448C335.632 66.76 333.967 63.208 333.967 58.792C333.967 54.504 335.504 51.048 338.576 48.424C341.712 45.8 346.672 44.488 353.456 44.488H369.487V41.416C369.487 37.064 368.272 33.768 365.84 31.528C363.408 29.224 359.856 28.072 355.184 28.072C351.984 28.072 348.911 28.616 345.967 29.704C343.023 30.728 340.496 32.168 338.384 34.024L335.311 28.936C337.871 26.76 340.943 25.096 344.527 23.944C348.111 22.728 351.887 22.12 355.855 22.12ZM353.456 68.104C357.296 68.104 360.592 67.24 363.344 65.512C366.096 63.72 368.143 61.16 369.487 57.832V49.576H353.647C345.007 49.576 340.688 52.584 340.688 58.6C340.688 61.544 341.808 63.88 344.048 65.608C346.288 67.272 349.424 68.104 353.456 68.104Z" />
            <path d="M420.544 22.12C426.88 22.12 431.905 23.976 435.617 27.688C439.393 31.336 441.28 36.68 441.28 43.72V73H434.465V44.392C434.465 39.144 433.153 35.144 430.529 32.392C427.905 29.64 424.161 28.264 419.297 28.264C413.857 28.264 409.536 29.896 406.336 33.16C403.2 36.36 401.633 40.808 401.633 46.504V73H394.816V1.76801H401.633V31.336C403.489 28.392 406.049 26.12 409.312 24.52C412.577 22.92 416.32 22.12 420.544 22.12Z" />
            <path d="M459.785 22.504H466.601V73H459.785V22.504ZM463.241 11.464C461.833 11.464 460.649 10.984 459.689 10.024C458.729 9.06401 458.249 7.91201 458.249 6.56801C458.249 5.28801 458.729 4.16801 459.689 3.208C460.649 2.248 461.833 1.76801 463.241 1.76801C464.649 1.76801 465.833 2.248 466.793 3.208C467.753 4.104 468.233 5.19201 468.233 6.47201C468.233 7.88001 467.753 9.06401 466.793 10.024C465.833 10.984 464.649 11.464 463.241 11.464Z" />
            <path d="M485.566 1.76801H492.383V73H485.566V1.76801Z" />
            <path d="M511.348 1.76801H518.164V73H511.348V1.76801Z" />
          </mask>
          <path
            d="M44.28 38.344C48.696 39.304 52.088 41.224 54.456 44.104C56.888 46.92 58.104 50.568 58.104 55.048C58.104 60.808 55.96 65.256 51.672 68.392C47.448 71.464 41.176 73 32.856 73H1.944V5.8H30.936C38.424 5.8 44.216 7.304 48.312 10.312C52.472 13.32 54.552 17.576 54.552 23.08C54.552 26.792 53.624 29.96 51.768 32.584C49.976 35.144 47.48 37.064 44.28 38.344ZM9.048 11.656V36.04H30.456C35.896 36.04 40.088 35.016 43.032 32.968C45.976 30.856 47.448 27.816 47.448 23.848C47.448 19.88 45.976 16.872 43.032 14.824C40.088 12.712 35.896 11.656 30.456 11.656H9.048ZM32.76 67.144C38.776 67.144 43.32 66.12 46.392 64.072C49.464 62.024 51 58.824 51 54.472C51 46.088 44.92 41.896 32.76 41.896H9.048V67.144H32.76Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M79.407 32.392C81.007 29 83.375 26.44 86.511 24.712C89.711 22.984 93.647 22.12 98.319 22.12V28.744L96.687 28.648C91.375 28.648 87.215 30.28 84.207 33.544C81.199 36.808 79.695 41.384 79.695 47.272V73H72.879V22.504H79.407V32.392Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M154.16 49.864H111.92C112.304 55.112 114.319 59.368 117.967 62.632C121.615 65.832 126.224 67.432 131.792 67.432C134.928 67.432 137.808 66.888 140.432 65.8C143.056 64.648 145.327 62.984 147.247 60.808L151.088 65.224C148.848 67.912 146.031 69.96 142.639 71.368C139.311 72.776 135.632 73.48 131.6 73.48C126.416 73.48 121.807 72.392 117.775 70.216C113.807 67.976 110.704 64.904 108.464 61C106.224 57.096 105.104 52.68 105.104 47.752C105.104 42.824 106.159 38.408 108.271 34.504C110.447 30.6 113.392 27.56 117.104 25.384C120.88 23.208 125.103 22.12 129.775 22.12C134.447 22.12 138.64 23.208 142.352 25.384C146.064 27.56 148.976 30.6 151.088 34.504C153.2 38.344 154.256 42.76 154.256 47.752L154.16 49.864ZM129.775 27.976C124.911 27.976 120.816 29.544 117.488 32.68C114.224 35.752 112.368 39.784 111.92 44.776H147.728C147.28 39.784 145.392 35.752 142.064 32.68C138.8 29.544 134.703 27.976 129.775 27.976Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M194.721 69.928C193.441 71.08 191.841 71.976 189.921 72.616C188.065 73.192 186.113 73.48 184.065 73.48C179.329 73.48 175.681 72.2 173.121 69.64C170.561 67.08 169.281 63.464 169.281 58.792V28.264H160.257V22.504H169.281V11.464H176.097V22.504H191.457V28.264H176.097V58.408C176.097 61.416 176.833 63.72 178.305 65.32C179.841 66.856 182.017 67.624 184.833 67.624C186.241 67.624 187.585 67.4 188.865 66.952C190.209 66.504 191.361 65.864 192.321 65.032L194.721 69.928Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M232.409 69.928C231.129 71.08 229.529 71.976 227.609 72.616C225.753 73.192 223.801 73.48 221.753 73.48C217.017 73.48 213.369 72.2 210.809 69.64C208.249 67.08 206.969 63.464 206.969 58.792V28.264H197.945V22.504H206.969V11.464H213.785V22.504H229.145V28.264H213.785V58.408C213.785 61.416 214.521 63.72 215.993 65.32C217.529 66.856 219.705 67.624 222.521 67.624C223.929 67.624 225.273 67.4 226.553 66.952C227.897 66.504 229.049 65.864 230.008 65.032L232.409 69.928Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M300.565 73.576C293.909 73.576 287.893 72.104 282.517 69.16C277.205 66.216 273.013 62.152 269.941 56.968C266.933 51.72 265.43 45.864 265.43 39.4C265.43 32.936 266.933 27.112 269.941 21.928C273.013 16.68 277.237 12.584 282.613 9.64001C287.989 6.69601 294.005 5.22401 300.661 5.22401C305.653 5.22401 310.262 6.05601 314.486 7.72001C318.71 9.38401 322.293 11.816 325.237 15.016L320.725 19.528C315.477 14.216 308.854 11.56 300.854 11.56C295.542 11.56 290.71 12.776 286.358 15.208C282.006 17.64 278.582 20.968 276.086 25.192C273.654 29.416 272.438 34.152 272.438 39.4C272.438 44.648 273.654 49.384 276.086 53.608C278.582 57.832 282.006 61.16 286.358 63.592C290.71 66.024 295.542 67.24 300.854 67.24C308.918 67.24 315.541 64.552 320.725 59.176L325.237 63.688C322.293 66.888 318.677 69.352 314.389 71.08C310.165 72.744 305.557 73.576 300.565 73.576Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M355.855 22.12C362.447 22.12 367.503 23.784 371.023 27.112C374.543 30.376 376.303 35.24 376.303 41.704V73H369.776V65.128C368.24 67.752 365.968 69.8 362.96 71.272C360.016 72.744 356.496 73.48 352.4 73.48C346.768 73.48 342.288 72.136 338.96 69.448C335.632 66.76 333.967 63.208 333.967 58.792C333.967 54.504 335.504 51.048 338.576 48.424C341.712 45.8 346.672 44.488 353.456 44.488H369.487V41.416C369.487 37.064 368.272 33.768 365.84 31.528C363.408 29.224 359.856 28.072 355.184 28.072C351.984 28.072 348.911 28.616 345.967 29.704C343.023 30.728 340.496 32.168 338.384 34.024L335.311 28.936C337.871 26.76 340.943 25.096 344.527 23.944C348.111 22.728 351.887 22.12 355.855 22.12ZM353.456 68.104C357.296 68.104 360.592 67.24 363.344 65.512C366.096 63.72 368.143 61.16 369.487 57.832V49.576H353.647C345.007 49.576 340.688 52.584 340.688 58.6C340.688 61.544 341.808 63.88 344.048 65.608C346.288 67.272 349.424 68.104 353.456 68.104Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M420.544 22.12C426.88 22.12 431.905 23.976 435.617 27.688C439.393 31.336 441.28 36.68 441.28 43.72V73H434.465V44.392C434.465 39.144 433.153 35.144 430.529 32.392C427.905 29.64 424.161 28.264 419.297 28.264C413.857 28.264 409.536 29.896 406.336 33.16C403.2 36.36 401.633 40.808 401.633 46.504V73H394.816V1.76801H401.633V31.336C403.489 28.392 406.049 26.12 409.312 24.52C412.577 22.92 416.32 22.12 420.544 22.12Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M459.785 22.504H466.601V73H459.785V22.504ZM463.241 11.464C461.833 11.464 460.649 10.984 459.689 10.024C458.729 9.06401 458.249 7.91201 458.249 6.56801C458.249 5.28801 458.729 4.16801 459.689 3.208C460.649 2.248 461.833 1.76801 463.241 1.76801C464.649 1.76801 465.833 2.248 466.793 3.208C467.753 4.104 468.233 5.19201 468.233 6.47201C468.233 7.88001 467.753 9.06401 466.793 10.024C465.833 10.984 464.649 11.464 463.241 11.464Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M485.566 1.76801H492.383V73H485.566V1.76801Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M511.348 1.76801H518.164V73H511.348V1.76801Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
        </svg>
      ) : (
        <svg
          className="logo"
          width="256"
          height="188"
          viewBox="0 0 256 188"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1"
            maskUnits="userSpaceOnUse"
            x="0.398254"
            y="0.799988"
            width="255"
            height="187"
            fill="black"
          >
            <rect
              fill="white"
              x="0.398254"
              y="0.799988"
              width="255"
              height="187"
            />
            <path d="M61.1238 34.344C65.5398 35.304 68.9318 37.224 71.2998 40.104C73.7318 42.92 74.9478 46.568 74.9478 51.048C74.9478 56.808 72.8038 61.256 68.5158 64.392C64.2918 67.464 58.0198 69 49.6998 69H18.7878V1.79999H47.7798C55.2678 1.79999 61.0598 3.30399 65.1558 6.31199C69.3158 9.31999 71.3958 13.576 71.3958 19.08C71.3958 22.792 70.4678 25.96 68.6118 28.584C66.8198 31.144 64.3238 33.064 61.1238 34.344ZM25.8918 7.65599V32.04H47.2998C52.7398 32.04 56.9318 31.016 59.8758 28.968C62.8198 26.856 64.2918 23.816 64.2918 19.848C64.2918 15.88 62.8198 12.872 59.8758 10.824C56.9318 8.71199 52.7398 7.65599 47.2998 7.65599H25.8918ZM49.6038 63.144C55.6198 63.144 60.1638 62.12 63.2358 60.072C66.3078 58.024 67.8438 54.824 67.8438 50.472C67.8438 42.088 61.7638 37.896 49.6038 37.896H25.8918V63.144H49.6038Z" />
            <path d="M96.2507 28.392C97.8507 25 100.219 22.44 103.355 20.712C106.555 18.984 110.491 18.12 115.163 18.12V24.744L113.531 24.648C108.219 24.648 104.059 26.28 101.051 29.544C98.0428 32.808 96.5388 37.384 96.5388 43.272V69H89.7227V18.504H96.2507V28.392Z" />
            <path d="M171.003 45.864H128.763C129.147 51.112 131.163 55.368 134.811 58.632C138.459 61.832 143.067 63.432 148.635 63.432C151.771 63.432 154.651 62.888 157.275 61.8C159.899 60.648 162.171 58.984 164.091 56.808L167.931 61.224C165.691 63.912 162.875 65.96 159.483 67.368C156.155 68.776 152.475 69.48 148.443 69.48C143.259 69.48 138.651 68.392 134.619 66.216C130.651 63.976 127.547 60.904 125.307 57C123.067 53.096 121.947 48.68 121.947 43.752C121.947 38.824 123.003 34.408 125.115 30.504C127.291 26.6 130.235 23.56 133.947 21.384C137.723 19.208 141.947 18.12 146.619 18.12C151.291 18.12 155.483 19.208 159.195 21.384C162.907 23.56 165.819 26.6 167.931 30.504C170.043 34.344 171.099 38.76 171.099 43.752L171.003 45.864ZM146.619 23.976C141.755 23.976 137.659 25.544 134.331 28.68C131.067 31.752 129.211 35.784 128.763 40.776H164.571C164.123 35.784 162.235 31.752 158.907 28.68C155.643 25.544 151.547 23.976 146.619 23.976Z" />
            <path d="M211.565 65.928C210.285 67.08 208.685 67.976 206.765 68.616C204.909 69.192 202.957 69.48 200.909 69.48C196.173 69.48 192.525 68.2 189.965 65.64C187.405 63.08 186.125 59.464 186.125 54.792V24.264H177.101V18.504H186.125V7.46399H192.941V18.504H208.301V24.264H192.941V54.408C192.941 57.416 193.677 59.72 195.149 61.32C196.685 62.856 198.861 63.624 201.677 63.624C203.085 63.624 204.429 63.4 205.709 62.952C207.053 62.504 208.205 61.864 209.165 61.032L211.565 65.928Z" />
            <path d="M249.252 65.928C247.972 67.08 246.372 67.976 244.452 68.616C242.596 69.192 240.644 69.48 238.596 69.48C233.86 69.48 230.212 68.2 227.652 65.64C225.092 63.08 223.812 59.464 223.812 54.792V24.264H214.788V18.504H223.812V7.46399H230.628V18.504H245.988V24.264H230.628V54.408C230.628 57.416 231.364 59.72 232.836 61.32C234.372 62.856 236.548 63.624 239.364 63.624C240.772 63.624 242.116 63.4 243.396 62.952C244.74 62.504 245.892 61.864 246.852 61.032L249.252 65.928Z" />
            <path d="M36.5343 186.576C29.8783 186.576 23.8623 185.104 18.4863 182.16C13.1743 179.216 8.98225 175.152 5.91025 169.968C2.90225 164.72 1.39825 158.864 1.39825 152.4C1.39825 145.936 2.90225 140.112 5.91025 134.928C8.98225 129.68 13.2063 125.584 18.5823 122.64C23.9583 119.696 29.9743 118.224 36.6303 118.224C41.6223 118.224 46.2303 119.056 50.4543 120.72C54.6783 122.384 58.2623 124.816 61.2063 128.016L56.6943 132.528C51.4463 127.216 44.8223 124.56 36.8223 124.56C31.5103 124.56 26.6783 125.776 22.3263 128.208C17.9743 130.64 14.5503 133.968 12.0543 138.192C9.62225 142.416 8.40625 147.152 8.40625 152.4C8.40625 157.648 9.62225 162.384 12.0543 166.608C14.5503 170.832 17.9743 174.16 22.3263 176.592C26.6783 179.024 31.5103 180.24 36.8223 180.24C44.8863 180.24 51.5103 177.552 56.6943 172.176L61.2063 176.688C58.2623 179.888 54.6463 182.352 50.3583 184.08C46.1343 185.744 41.5263 186.576 36.5343 186.576Z" />
            <path d="M91.8242 135.12C98.4162 135.12 103.472 136.784 106.992 140.112C110.512 143.376 112.272 148.24 112.272 154.704V186H105.744V178.128C104.208 180.752 101.936 182.8 98.9283 184.272C95.9843 185.744 92.4643 186.48 88.3683 186.48C82.7363 186.48 78.2563 185.136 74.9283 182.448C71.6003 179.76 69.9362 176.208 69.9362 171.792C69.9362 167.504 71.4723 164.048 74.5443 161.424C77.6803 158.8 82.6403 157.488 89.4243 157.488H105.456V154.416C105.456 150.064 104.24 146.768 101.808 144.528C99.3763 142.224 95.8243 141.072 91.1523 141.072C87.9523 141.072 84.8802 141.616 81.9362 142.704C78.9922 143.728 76.4642 145.168 74.3522 147.024L71.2803 141.936C73.8403 139.76 76.9123 138.096 80.4963 136.944C84.0803 135.728 87.8562 135.12 91.8242 135.12ZM89.4243 181.104C93.2643 181.104 96.5603 180.24 99.3123 178.512C102.064 176.72 104.112 174.16 105.456 170.832V162.576H89.6163C80.9763 162.576 76.6562 165.584 76.6562 171.6C76.6562 174.544 77.7762 176.88 80.0163 178.608C82.2563 180.272 85.3923 181.104 89.4243 181.104Z" />
            <path d="M156.513 135.12C162.849 135.12 167.873 136.976 171.585 140.688C175.361 144.336 177.249 149.68 177.249 156.72V186H170.433V157.392C170.433 152.144 169.121 148.144 166.497 145.392C163.873 142.64 160.129 141.264 155.265 141.264C149.825 141.264 145.505 142.896 142.305 146.16C139.169 149.36 137.601 153.808 137.601 159.504V186H130.785V114.768H137.601V144.336C139.457 141.392 142.017 139.12 145.281 137.52C148.545 135.92 152.289 135.12 156.513 135.12Z" />
            <path d="M195.754 135.504H202.57V186H195.754V135.504ZM199.21 124.464C197.802 124.464 196.618 123.984 195.658 123.024C194.698 122.064 194.218 120.912 194.218 119.568C194.218 118.288 194.698 117.168 195.658 116.208C196.618 115.248 197.802 114.768 199.21 114.768C200.618 114.768 201.802 115.248 202.762 116.208C203.722 117.104 204.202 118.192 204.202 119.472C204.202 120.88 203.722 122.064 202.762 123.024C201.802 123.984 200.618 124.464 199.21 124.464Z" />
            <path d="M221.535 114.768H228.351V186H221.535V114.768Z" />
            <path d="M247.316 114.768H254.133V186H247.316V114.768Z" />
          </mask>
          <path
            d="M61.1238 34.344C65.5398 35.304 68.9318 37.224 71.2998 40.104C73.7318 42.92 74.9478 46.568 74.9478 51.048C74.9478 56.808 72.8038 61.256 68.5158 64.392C64.2918 67.464 58.0198 69 49.6998 69H18.7878V1.79999H47.7798C55.2678 1.79999 61.0598 3.30399 65.1558 6.31199C69.3158 9.31999 71.3958 13.576 71.3958 19.08C71.3958 22.792 70.4678 25.96 68.6118 28.584C66.8198 31.144 64.3238 33.064 61.1238 34.344ZM25.8918 7.65599V32.04H47.2998C52.7398 32.04 56.9318 31.016 59.8758 28.968C62.8198 26.856 64.2918 23.816 64.2918 19.848C64.2918 15.88 62.8198 12.872 59.8758 10.824C56.9318 8.71199 52.7398 7.65599 47.2998 7.65599H25.8918ZM49.6038 63.144C55.6198 63.144 60.1638 62.12 63.2358 60.072C66.3078 58.024 67.8438 54.824 67.8438 50.472C67.8438 42.088 61.7638 37.896 49.6038 37.896H25.8918V63.144H49.6038Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M96.2507 28.392C97.8507 25 100.219 22.44 103.355 20.712C106.555 18.984 110.491 18.12 115.163 18.12V24.744L113.531 24.648C108.219 24.648 104.059 26.28 101.051 29.544C98.0428 32.808 96.5388 37.384 96.5388 43.272V69H89.7227V18.504H96.2507V28.392Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M171.003 45.864H128.763C129.147 51.112 131.163 55.368 134.811 58.632C138.459 61.832 143.067 63.432 148.635 63.432C151.771 63.432 154.651 62.888 157.275 61.8C159.899 60.648 162.171 58.984 164.091 56.808L167.931 61.224C165.691 63.912 162.875 65.96 159.483 67.368C156.155 68.776 152.475 69.48 148.443 69.48C143.259 69.48 138.651 68.392 134.619 66.216C130.651 63.976 127.547 60.904 125.307 57C123.067 53.096 121.947 48.68 121.947 43.752C121.947 38.824 123.003 34.408 125.115 30.504C127.291 26.6 130.235 23.56 133.947 21.384C137.723 19.208 141.947 18.12 146.619 18.12C151.291 18.12 155.483 19.208 159.195 21.384C162.907 23.56 165.819 26.6 167.931 30.504C170.043 34.344 171.099 38.76 171.099 43.752L171.003 45.864ZM146.619 23.976C141.755 23.976 137.659 25.544 134.331 28.68C131.067 31.752 129.211 35.784 128.763 40.776H164.571C164.123 35.784 162.235 31.752 158.907 28.68C155.643 25.544 151.547 23.976 146.619 23.976Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M211.565 65.928C210.285 67.08 208.685 67.976 206.765 68.616C204.909 69.192 202.957 69.48 200.909 69.48C196.173 69.48 192.525 68.2 189.965 65.64C187.405 63.08 186.125 59.464 186.125 54.792V24.264H177.101V18.504H186.125V7.46399H192.941V18.504H208.301V24.264H192.941V54.408C192.941 57.416 193.677 59.72 195.149 61.32C196.685 62.856 198.861 63.624 201.677 63.624C203.085 63.624 204.429 63.4 205.709 62.952C207.053 62.504 208.205 61.864 209.165 61.032L211.565 65.928Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M249.252 65.928C247.972 67.08 246.372 67.976 244.452 68.616C242.596 69.192 240.644 69.48 238.596 69.48C233.86 69.48 230.212 68.2 227.652 65.64C225.092 63.08 223.812 59.464 223.812 54.792V24.264H214.788V18.504H223.812V7.46399H230.628V18.504H245.988V24.264H230.628V54.408C230.628 57.416 231.364 59.72 232.836 61.32C234.372 62.856 236.548 63.624 239.364 63.624C240.772 63.624 242.116 63.4 243.396 62.952C244.74 62.504 245.892 61.864 246.852 61.032L249.252 65.928Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M36.5343 186.576C29.8783 186.576 23.8623 185.104 18.4863 182.16C13.1743 179.216 8.98225 175.152 5.91025 169.968C2.90225 164.72 1.39825 158.864 1.39825 152.4C1.39825 145.936 2.90225 140.112 5.91025 134.928C8.98225 129.68 13.2063 125.584 18.5823 122.64C23.9583 119.696 29.9743 118.224 36.6303 118.224C41.6223 118.224 46.2303 119.056 50.4543 120.72C54.6783 122.384 58.2623 124.816 61.2063 128.016L56.6943 132.528C51.4463 127.216 44.8223 124.56 36.8223 124.56C31.5103 124.56 26.6783 125.776 22.3263 128.208C17.9743 130.64 14.5503 133.968 12.0543 138.192C9.62225 142.416 8.40625 147.152 8.40625 152.4C8.40625 157.648 9.62225 162.384 12.0543 166.608C14.5503 170.832 17.9743 174.16 22.3263 176.592C26.6783 179.024 31.5103 180.24 36.8223 180.24C44.8863 180.24 51.5103 177.552 56.6943 172.176L61.2063 176.688C58.2623 179.888 54.6463 182.352 50.3583 184.08C46.1343 185.744 41.5263 186.576 36.5343 186.576Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M91.8242 135.12C98.4162 135.12 103.472 136.784 106.992 140.112C110.512 143.376 112.272 148.24 112.272 154.704V186H105.744V178.128C104.208 180.752 101.936 182.8 98.9283 184.272C95.9843 185.744 92.4643 186.48 88.3683 186.48C82.7363 186.48 78.2563 185.136 74.9283 182.448C71.6003 179.76 69.9362 176.208 69.9362 171.792C69.9362 167.504 71.4723 164.048 74.5443 161.424C77.6803 158.8 82.6403 157.488 89.4243 157.488H105.456V154.416C105.456 150.064 104.24 146.768 101.808 144.528C99.3763 142.224 95.8243 141.072 91.1523 141.072C87.9523 141.072 84.8802 141.616 81.9362 142.704C78.9922 143.728 76.4642 145.168 74.3522 147.024L71.2803 141.936C73.8403 139.76 76.9123 138.096 80.4963 136.944C84.0803 135.728 87.8562 135.12 91.8242 135.12ZM89.4243 181.104C93.2643 181.104 96.5603 180.24 99.3123 178.512C102.064 176.72 104.112 174.16 105.456 170.832V162.576H89.6163C80.9763 162.576 76.6562 165.584 76.6562 171.6C76.6562 174.544 77.7762 176.88 80.0163 178.608C82.2563 180.272 85.3923 181.104 89.4243 181.104Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M156.513 135.12C162.849 135.12 167.873 136.976 171.585 140.688C175.361 144.336 177.249 149.68 177.249 156.72V186H170.433V157.392C170.433 152.144 169.121 148.144 166.497 145.392C163.873 142.64 160.129 141.264 155.265 141.264C149.825 141.264 145.505 142.896 142.305 146.16C139.169 149.36 137.601 153.808 137.601 159.504V186H130.785V114.768H137.601V144.336C139.457 141.392 142.017 139.12 145.281 137.52C148.545 135.92 152.289 135.12 156.513 135.12Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M195.754 135.504H202.57V186H195.754V135.504ZM199.21 124.464C197.802 124.464 196.618 123.984 195.658 123.024C194.698 122.064 194.218 120.912 194.218 119.568C194.218 118.288 194.698 117.168 195.658 116.208C196.618 115.248 197.802 114.768 199.21 114.768C200.618 114.768 201.802 115.248 202.762 116.208C203.722 117.104 204.202 118.192 204.202 119.472C204.202 120.88 203.722 122.064 202.762 123.024C201.802 123.984 200.618 124.464 199.21 124.464Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M221.535 114.768H228.351V186H221.535V114.768Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M247.316 114.768H254.133V186H247.316V114.768Z"
            stroke="white"
            stroke-width="2"
            mask="url(#path-1-outside-1)"
          />
        </svg>
      )}
    </Fragment>
  );
};

export default Name;
