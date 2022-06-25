// import React from "react";
// import styled from "styled-components";

// import { COLOR_V2 } from "../constants/ColorV2";

// export type CardType = "coupon" | "normal";

// interface StyleCustom {
//   width?: string;
//   height?: string;
//   margin?: string;
//   background?: string;
//   color?: string;
//   hoverColor?: string;
//   activeColor?: string;
//   disabledColor?: string;
//   padding?: string;
//   border?: string;
//   fontSize?: string;
//   titleColor?: string;
//   descColor?: string;
//   expirationColor?: string;
// }

// interface IProps {
//   cardType?: CardType;
//   cardTitle?: string;
//   cardDesc?: string;
//   cardExpiration?: string;
//   className?: string;
//   backgroundColor?: string;
//   onClick?: (e: React.MouseEvent) => void;
//   disabled?: boolean;
//   style?: StyleCustom;
//   cardPromotionValue?: string;
// }

// function Card(props: IProps) {
//   const {
//     cardType,
//     onClick,
//     disabled = false,
//     style,
//     cardTitle,
//     cardDesc,
//     cardExpiration,
//     className,
//   }: IProps = props;

//   return (
//     <>
//       <CardWrapper
//         className={className}
//         style={style}
//         onClick={onClick}
//         disabled={disabled}
//         color={COLOR_V2.WHITE1}
//         hoverColor={COLOR_V2.PRIMARY5}
//         activeColor={COLOR_V2.PRIMARY_ACTIVE}
//         disabledColor={COLOR_V2.PRIMARY_DISABLED}
//       >
//         <CardContentWrapper>
//           <CardTitleWrapper style={style}>{cardTitle}</CardTitleWrapper>
//           {/* <hr style={{ marginTop: "16px" }} /> */}
//           <CardDescWrapper style={style}>{cardDesc}</CardDescWrapper>
//           {cardType === "coupon" && (
//             <ExpirationWrapper style={style}>
//               {cardExpiration}
//             </ExpirationWrapper>
//           )}
//         </CardContentWrapper>
//       </CardWrapper>
//     </>
//   );
// }

// export default Card;

// const CardWrapper = styled.div`
//   background-color: ${(props) => props.style?.background ?? ""};
//   color: ${(props) => props.style?.color ?? ""};
//   border-radius: 8px;
//   border: ${(props) => props.style?.border ?? ""};
//   padding: ${(props) => props.style?.padding ?? ""};
//   order: 2;
//   flex-grow: 0;
//   font-style: normal;
//   font-weight: 600;
//   font-size: ${(props) => props.style?.fontSize ?? "18px"};
//   line-height: 22px;
//   text-align: left;
//   letter-spacing: -0.02em;
//   width: ${(props) => props.style?.width ?? ""};
//   height: ${(props) => props.style?.height ?? ""};
//   margin: ${(props) => props.style?.margin ?? ""};

//   @media screen and (max-width: 680px) {
//     width: 100%;
//   }

//   &:hover {
//     background-color: ${(props) => props.style?.hoverColor ?? ""};
//   }
//   &:active {
//     background-color: ${(props) => props.style?.activeColor ?? ""};
//   }
//   &:disabled {
//     background-color: ${(props) => props.style?.disabledColor ?? ""};
//   }
// `;

// const CardContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 0px;
//   margin: 0px;
//   height: 100%;
// `;

// const CardTitleWrapper = styled.div`
//   font-size: 18px;
//   font-weight: 700;
//   line-height: 140%;
//   display: flex;
//   align-items: center;
//   text-align: center;
//   letter-spacing: -0.02em;
//   color: ${(props) => props.style?.titleColor ?? ""};
//   flex: none;
//   order: 0;
//   flex-grow: 0;
// `;

// const CardDescWrapper = styled.div`
//   margin-top: 16px;
//   color: ${(props) => props.style?.descColor ?? ""}
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 90%;
//   display: flex;
//   letter-spacing: -0.02em
// `;

// const ExpirationWrapper = styled.div`
//   margin: 8px 0px 0px 0px;
//   color: ${(props) => props.style?.expirationColor ?? ""};
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 90%;
// `;
