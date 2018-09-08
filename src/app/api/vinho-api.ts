import { InMemoryDbService } from 'angular-in-memory-web-api';

export class VinhoApi implements InMemoryDbService{

    createDb() {
        let vinhos =  [ 
            {
                id: 1, 
                nome: 'Casillero Del Diablo', 
                classificacao: 'Tinto Seco', 
                uva: 'Cabernet Sauvignon', 
                fabricante: 'Concha y Toro', 
                paisOrigem: 'Chile', 
                anoSafra: 2010 },
            {
                id: 2, 
                nome: 'Salton Talento', 
                classificacao: 'Tinto Suave', 
                uva: 'Carmenere', 
                fabricante: 'Vinícola Salton', 
                paisOrigem: 'Brasil', 
                anoSafra: 2012 
            },
            {
                id: 3, 
                nome: 'Salton Desejo', 
                classificacao: 'Tinto Seco', 
                uva: 'Merlot', 
                fabricante: 'Vinícola Salton', 
                paisOrigem: 'Brasil', 
                anoSafra: 2008 
            },
            {
                id: 4, 
                nome: 'Herdeiros Del Marques de Riscal', 
                classificacao: 'Tinto Seco', 
                uva: 'Cabernet Sauvignon', 
                fabricante: 'Riscal', 
                paisOrigem: 'Espanha', 
                anoSafra: 2007 
            }             
        ];

        return { vinhos }
    }
}