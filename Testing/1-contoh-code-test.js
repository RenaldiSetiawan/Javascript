// Tulis script untuk melakukan test

// test('deskripsi dari testcase kamu', () => {
//     expect(perintah).matcher(nilai yang diekspektasikan);
// });
 

describe('pengujian olah aritmatika', () => {
    test('#1 dua tambah dua adalah empat', () => {
         expect(2+2).toBe(4);
    });
  
    test('#2 dua kali tiga adalah enam', () => {
         expect(2*3).toBe(6);
    });
 });

/* 
    toBe(x)	bahwa nilai ekspektasi yang diharapkan adalah x
    toEqual(x)	bahwa nilai ekspektasi yang diharapkan sama dengan x
    toBeNull()	bahwa nilai ekspektasi yang diharapkan adalah null
    toBeTruthy()	bahwa nilai ekspektasi yang diharapkan adalah truth
    toBeFalsy()	bahwa nilai ekspektasi yang diharapkan adalah false 
*/