import * as React from "react";
import useSWR from "swr";

// với SWR, bạn có thể tối ưu hóa quá trình này bằng cách tạm thời lưu trữ kết quả trả về từ yêu cầu trước đó trong bộ nhớ đệm. Khi người dùng thực hiện hành động như cuộn trang hoặc chuyển sang trang khác và quay lại, thay vì gửi yêu cầu lên máy chủ một lần nữa, SWR sẽ truy vấn bộ nhớ đệm đầu tiên để lấy dữ liệu.
export interface StudentDetailProps {
  studentId: string;
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, mutate, isValidating } = useSWR(
    `/students/${studentId}`,
    {
      //qua tab khác back lại thì nó sẽ gọi lại
      revalidateOnFocus: false,
      //sử dụng để cấu hình thời gian tối thiểu giữa các yêu cầu trùng lặp đến cùng một URL. Nếu một yêu cầu mới được gửi đến cùng một URL trong khoảng thời gian này, nó sẽ được xem là yêu cầu trùng lặp và SWR sẽ không gửi yêu cầu mới mà sẽ sử dụng kết quả từ yêu cầu trước đó đã được lưu trữ trong bộ nhớ đệm.
      dedupingInterval: MILLISECOND_PER_HOUR,
    }
  );

  function handleMutateClick() {
    mutate({ name: "easy frontend" }, true);
  }

  return (
    <div>
      Name: {data?.name || "--"}{" "}
      <button onClick={handleMutateClick}>mutate</button>
    </div>
  );
}
