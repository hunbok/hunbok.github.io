// 이미지 클릭 시 모달 열기
function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

// 모달 닫기
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// 배경 클릭 시 모달 닫기 기능 추가
document.getElementById("imageModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeModal();
    }
});
