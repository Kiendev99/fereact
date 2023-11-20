import { Breadcrumb, Container, IntroduceCard } from "../../../components";

const IntroducePage = () => {
  const items = [
    {
      title: "Giới Thiệu BOOKSHOP",
      label: "Lịch sử hình thành và phát triển",
      text: "",
      description: [
        {
          label: "12",
          letter: "Năm kinh nghiệm",
        },
        {
          label: "20K",
          letter: "Khách hàng",
        },
        {
          label: "100%",
          letter: "Sự hài lòng của khách hàng",
        },
      ],
      order: false,
    },
    {
      title: "Hệ thống Nhà sách chuyên nghiệp",
      label:
        "Tầm nhìn của chúng tôi là đơn giản - chúng tôi tồn tại để tăng tốc tiến độ của khách hàng",
      text: "Mạng lưới phát hành của Công ty FAHASA rộng khắp trên toàn quốc, gồm 5 Trung tâm sách, 1 Xí nghiệp in và với gần 60 Nhà sách trải dọc khắp các tỉnh thành từ TP.HCM đến Thủ Đô Hà Nội, miền Trung, Tây Nguyên, miền Đông và Tây Nam Bộ như: Hà Nội, Vĩnh Phúc, Hải Phòng, Thanh Hóa, Hà Tĩnh, Huế, Đà Nẵng, Quảng Nam, Quảng Ngãi, Quy Nhơn, Nha Trang, Gia Lai, Đăklăk, Bảo Lộc - Lâm Đồng, Ninh Thuận, Bình Thuận, Bình Phước, Bình Dương, Đồng Nai, Vũng Tàu, Long An, Tiền Giang, Bến Tre, Vĩnh Long, Cần Thơ, Hậu Giang, An Giang, Kiên Giang, Sóc Trăng, Cà Mau.",
      description: [
        {
          label: "1",
          letter: "Chúng tôi xây dựng mối quan hệ mạnh mẽ",
        },
        {
          label: "2",
          letter: "Chúng tôi khuyến khích sáng kiến và cung cấp cơ hội",
        },
        {
          label: "2",
          letter: "Chúng tôi đón nhận sự thay đổi và sáng tạo",
        },
        {
          label: "4",
          letter: "Chúng tôi ủng hộ một môi trường trung thực",
        },
      ],
      order: true,
    },
  ];

  return (
    <>
      <Container>
        <div className="mt-2 mb-5">
          <Breadcrumb text="Tiện ích - Giải trí - Kết nối" />
        </div>

        <div className="flex flex-col bg-white p-10 rounded-xl gap-10">
          {items.map((item) => (
            <div key={item.title}>
              <IntroduceCard item={item} order={item.order} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default IntroducePage;
