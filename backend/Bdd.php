<?php

    class Bdd {
        
        private $localhost = "localhost";
        private $dbName = "calculator9000";
        private $login = "root";
        private $password = "";
        
        public function connect() {
            try {
                $conn = new PDO("mysql:host=" . $this->localhost . ";dbname=" . $this->dbName, $this->login, $this->password);
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $conn;
            }
            catch (Exception $e) {
                echo "Database Error: " . $e ->getMessage();
            }
        }
    }

?>