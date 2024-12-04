document.querySelectorAll('.join-button').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'room.html';
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const createRoomBtn = document.querySelector(".create-room-btn");
    const closePopupCancel = document.getElementById("close-popup");
    const closePopupBtn = document.querySelector(".close-popup-btn");

    // Show popup
    createRoomBtn.addEventListener("click", () => {
        overlay.classList.remove("hidden");
        popup.classList.remove("hidden");
    });

    // Hide popup
    closePopupCancel.addEventListener("click", () => {
        overlay.classList.add("hidden");
        popup.classList.add("hidden");
    });

    // Close popup when clicking outside
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.add("hidden");
            popup.classList.add("hidden");
        }
    });

    closePopupBtn.addEventListener("click", () => {
        overlay.classList.add("hidden");
        popup.classList.add("hidden");
    });

    // Select background
    const backgroundOptions = document.querySelectorAll(".background-image");

backgroundOptions.forEach((img) => {
    img.addEventListener("click", () => {
        // Xóa class 'selected' khỏi tất cả các ảnh
        backgroundOptions.forEach((i) => i.classList.remove("selected"));

        // Thêm class 'selected' vào ảnh được click
        img.classList.add("selected");

        // Lấy giá trị của ảnh được chọn
        const selectedBackground = img.getAttribute("data-bg-img");
        console.log("Background được chọn:", selectedBackground);

        // Bạn có thể sử dụng giá trị này để thực hiện hành động khác (lưu, hiển thị, gửi đi, ...)
    });
});


    // Handle topic selection
    const selectElement = document.getElementById('room-topic');
    const selectedTopicsDiv = document.getElementById('selected-topics');

    // Hàm cập nhật danh sách các topic đã chọn
    function updateSelectedTopics() {
        // Lấy tất cả các mục đã chọn trong <select>
        const selectedOptions = Array.from(selectElement.selectedOptions);

        selectedOptions.forEach(option => {
            // Kiểm tra xem giá trị đã được thêm vào div chưa
            if (!Array.from(selectedTopicsDiv.children).some(child => child.textContent === option.text)) {
                const topicDiv = document.createElement('span');
                topicDiv.textContent = option.text;  // Hiển thị tên của lựa chọn
                selectedTopicsDiv.appendChild(topicDiv); // Thêm vào div bên ngoài
            }
        });
    }

    // Lắng nghe sự kiện thay đổi trên <select> và cập nhật khi có sự thay đổi
    selectElement.addEventListener('change', function() {
        updateSelectedTopics();  // Cập nhật các giá trị đã chọn
    });

    // Cập nhật giao diện ban đầu (nếu có các giá trị đã chọn từ trước)
    updateSelectedTopics();


    
});
