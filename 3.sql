SELECT
    e.id , e.nama, e.idPrev,
    m.id , m.nama, m.idPrev
FROM
    komunal.metal e
  
INNER JOIN komunal.metal m ON m.id = e.idPrev ;