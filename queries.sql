-- Veritabanı Sorguları

-- Posta kodu 1010 olan tüm müşterileri bulun
SELECT * FROM Customers WHERE PostalCode = '1010';

-- id'si 11 olan tedarikçinin telefon numarasını bulun
SELECT Phone FROM Suppliers WHERE SupplierId = 11;

-- Verilen ilk 10 siparişi, sipariş tarihine göre azalan şekilde listeleyin
SELECT TOP 10 * FROM Orders ORDER BY OrderDate DESC;

-- Londra, Madrid veya Brezilya'da yaşayan tüm müşterileri bulun
SELECT * FROM Customers WHERE City IN ('London', 'Madrid') OR Country = 'Brazil';

-- "The Shire" için bir müşteri kaydı ekleyin, ilgili kişi adı "Bilbo Baggins", adres - "Bag End" içinde "1 Hobbit-Hole", posta kodu "111" ve ülke "Middle Earth"
INSERT INTO (CustomerName, ContactName, Addres, City, PostalCode, Country) VALUES ("Bilbo Baggins", "Bag End", "1 Hobbit-Hole","The Shire", "111", "Orta Dünya");
-- Posta kodu "11122" olarak değişecek şekilde Bilbo Baggins kaydını güncelleyin
UPDATE Customers SET PostalCode = '11122' WHERE CustomerName = 'Bilbo Baggins';
-- (Zorlayıcı Görev)
SELECT DISTINCT City FROM Customers;
-- (Zorlayıcı Görev) 20 karakterden uzun adları olan tüm tedarikçileri bulun. Adın uzunluğunu almak için "length(SupplierName)" kullanabilirsiniz.
SELECT * FROM Suppliers WHERE len(SupplierName) > 20;