export interface TOCItem {
  id: string;
  number?: string;
  title: string;
  children?: TOCItem[];
}

export const tocSections: TOCItem[] = [
  {
    id: 'dan-nhap',
    number: '1',
    title: 'Dẫn Nhập',
  },
  {
    id: 'schellenberg',
    number: '2',
    title: 'Thách Thức Triết Học Đương Đại',
    children: [
      { id: 'cau-truc-lap-luan', number: '2.1', title: 'Cấu Trúc Lập Luận Diễn Dịch' },
      { id: 'phan-bo-niem-tin', number: '2.2', title: 'Sự Phân Bố Của Niềm Tin' },
    ],
  },
  {
    id: 'phan-bien',
    number: '3',
    title: 'Phản Biện Từ Thần Học Triết Học',
    children: [
      { id: 'phu-nhan-vo-tin', number: '3.1', title: 'Phủ Nhận Sự Vô Tín Không Kháng Cự' },
      { id: 'kha-nang-tuong-quan', number: '3.2', title: 'Khả Năng Tương Quan Không Cần Niềm Tin' },
    ],
  },
  {
    id: 'thien-ich',
    number: '4',
    title: 'Luận Điểm Về Những Thiện Ích Lớn Hơn',
  },
  {
    id: 'than-hoc-hoai-nghi',
    number: '5',
    title: 'Chủ Nghĩa Thần Học Hoài Nghi',
  },
  {
    id: 'aquinas',
    number: '6',
    title: 'Thomas Aquinas',
    children: [
      { id: 'ban-the-vo-hinh', number: '6.1', title: 'Bản Thể Vô Hình' },
      { id: 'dau-vet', number: '6.2', title: 'Nhận Biết Qua Dấu Vết' },
    ],
  },
  {
    id: 'khung-hoang-nhan-thuc',
    number: '7',
    title: 'Khủng Hoảng Nhận Thức Luận Hiện Đại',
  },
  {
    id: 'pascal',
    number: '8',
    title: 'Blaise Pascal & Deus Absconditus',
    children: [
      { id: 'muc-dich-an-giau', number: '8.1', title: 'Mục Đích Của Sự Ẩn Giấu' },
      { id: 'vuc-tham-tam-ly', number: '8.2', title: 'Vực Thẳm Tâm Lý & Giác Ngộ' },
    ],
  },
  {
    id: 'dem-toi',
    number: '9',
    title: 'Đêm Tối Của Linh Hồn',
    children: [
      { id: 'chuyen-tiep-tam-linh', number: '9.1', title: 'Chuyển Tiếp Khỏi Thời Thơ Ấu' },
      { id: 'toi-tam-giac-quan', number: '9.2', title: 'Sự Tối Tăm Của Giác Quan' },
      { id: 'an-du-mua-dong', number: '9.3', title: 'Ẩn Dụ Về Mùa Đông' },
    ],
  },
  {
    id: 'lang-kinh-truyen-thong',
    number: '10',
    title: 'Các Lăng Kính Truyền Thống Đức Tin',
    children: [
      { id: 'than-hoc-phu-dinh', number: '10.1', title: 'Thần Học Phủ Định' },
      { id: 'quan-diem-cong-giao', number: '10.2', title: 'Quan Điểm Công Giáo' },
    ],
  },
  {
    id: 'cs-lewis',
    number: '11',
    title: 'C.S. Lewis & Khát Vọng Tâm Linh',
  },
  {
    id: 'ket-luan',
    number: '12',
    title: 'Kết Luận',
  },
  {
    id: 'nguon-trich-dan',
    title: 'Nguồn Trích Dẫn',
  },
];
