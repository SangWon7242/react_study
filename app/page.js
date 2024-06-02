// props는 properties의 줄임말
// 특정 값을 컴포넌트의 전달해줄 때 사용
const Hello = (props) => {
  return <div>안녕하세요 {props.name}</div>;
};

// 여러개의 props 넘기기, 비구조화 할당(구조분해)
// 매번 color: props.color --> 매번 props를 붙이는게 번거로움
// ({ name, color }) 이렇게 props 대신 사용 가능
const Good = ({ name, color }) => {
  return <div style={{ color }}>안녕하세요 {name}</div>;
};

export default function Home() {
  const style = {
    backgroundColor: "red",
    width: "200px",
    height: "200px",
    marginTop: "20px",
  };

  return (
    <div>
      <Hello name="react" />
      <Good name="react" color="blue" />
    </div>
  );
}
