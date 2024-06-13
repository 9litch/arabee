<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // استلام بيانات النموذج
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // تشفير كلمة المرور
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // إعداد استعلام الإدخال
    $sql = "INSERT INTO test (user, gmail, password) VALUES (?, ?, ?)";

    // استخدام تحضير العبارات لحماية إضافية من حقن SQL
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $hashed_password);

    // تنفيذ الاستعلام
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // إغلاق الاتصال
    $stmt->close();
    $conn->close();
}
?>
