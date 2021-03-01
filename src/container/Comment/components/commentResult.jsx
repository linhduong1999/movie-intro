
/*
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { List, Avatar, Button, Skeleton } from "antd";
import { getData } from "../reselect";
import { useDispatch } from "react-redux";
import { requestComment } from "../action";

// const CommentResult = () => {
//   const [count, setCount] = useState(3);
//   const [initLoading, setInitLoading] = useState(true);
//   const { list } = useSelector(
//     createStructuredSelector({
//       list: getData,
//     })
//   );

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(requestComment(count));
//     setInitLoading(false);
//   }, [count]);

//   const onLoadMore = () => {
//     dispatch(requestComment(count + 3));
//     setCount((prevCount) => prevCount + 3);
//   };

//   const loadMore = !initLoading ? (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: 12,
//         height: 32,
//         lineHeight: "32px",
//       }}
//     >
//       <Button onClick={onLoadMore}>loading more</Button>
//     </div>
//   ) : null;

//   return (
//     <>
//       <List
//         className="demo-loadmore-list"
//         loading={initLoading}
//         itemLayout="horizontal"
//         loadMore={loadMore}
//         dataSource={list}
//         renderItem={(item) => (
//           <List.Item
//             actions={[
//               <a key="list-loadmore-edit">edit</a>,
//               <a key="list-loadmore-more">more</a>,
//             ]}
//           >
//             <Skeleton avatar title={false} loading={item.loading} active>
//               <List.Item.Meta
//                 avatar={
//                   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//                 }
//                 title={<a href="https://ant.design">{item.name.last}</a>}
//                 description="Ant Design, a design language for background applications, is refined by Ant UED Team"
//               />
//               <div>content</div>
//             </Skeleton>
//           </List.Item>
//         )}
//       />
//     </>
//   );
// };

// TEMPORARY FIX
const CommentResult = () => {
  const data = [
    {
      title: "Cerm",
    },
    {
      title: "Joe",
    },
    {
      title: "Glorielly",
    },
    {
      title: "Linh",
    },
  ];
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default React.memo(CommentResult);
*/

