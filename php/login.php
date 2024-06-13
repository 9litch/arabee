<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // استلام بيانات النموذج
    $email = $_POST['email'];
    $password = $_POST['password'];

    // إعداد استعلام البحث
    $sql = "SELECT id, user, password FROM test WHERE gmail = ?";

    // استخدام تحضير العبارات لحماية إضافية من حقن SQL
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $username, $hashed_password);
        $stmt->fetch();

        // التحقق من كلمة المرور
        if (password_verify($password, $hashed_password)) {
            echo "Login successful. Welcome, " . $username . "!";
            // يمكنك هنا إعداد جلسة المستخدم (session) أو إعادة التوجيه لصفحة أخرى
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "No user found with this email.";
    }

    // إغلاق الاتصال
    $stmt->close();
    $conn->close();
}
?>
