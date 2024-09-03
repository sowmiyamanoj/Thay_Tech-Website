import "./HeaderService.css";
import "./HomeService.css";

function HeaderService(props: any) {
  return (
    <div className="container-fluid bg-breadcrumb">
      <div className="bg-breadcrumb-single"></div>
      <div className="container text-center py-8" style={{ maxWidth: "900px" }}>
        <h4
          className="text-white font-bold text-2xl display-4 mb-4 wow fadeInDown"
          data-wow-delay="0.1s"
        >
          {props.name}
        </h4>
      </div>
    </div>
  );
}

export default HeaderService;
