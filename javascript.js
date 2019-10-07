window.onload = function() {
	selector()
};

function selector() {
	var audi = [
		  {
		    "model": "Audi A1 MY18 1.0 TSI AUT. 7V 70KW (95CV) PK01",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI AUT. 7V 70KW (95CV) PK02",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI AUT. 7V 70KW (95CV) PK04",
		    "consumption": 4.5,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI AUT. 7V 70KW (95CV) PK07",
		    "consumption": 4.6,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI AUT. 7V 70KW (95CV) PK10",
		    "consumption": 4.6,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI MAN. 5V 70KW (95CV) PK01",
		    "consumption": 4.2,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI MAN. 5V 70KW (95CV) PK02",
		    "consumption": 4.2,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI MAN. 5V 70KW (95CV) PK04",
		    "consumption": 4.3,
		    "emissions": 98
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI MAN. 5V 70KW (95CV) PK07",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI MAN. 5V 70KW (95CV) PK10",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI AUT. 7V 66KW (90CV) PK01",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI AUT. 7V 66KW (90CV) PK02",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI AUT. 7V 66KW (90CV) PK04",
		    "consumption": 3.9,
		    "emissions": 101
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI AUT. 7V 66KW (90CV) PK07",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI AUT. 7V 66KW (90CV) PK10",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI MAN. 5V 66KW (90CV) PK01",
		    "consumption": 3.6,
		    "emissions": 94
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI MAN. 5V 66KW (90CV) PK02",
		    "consumption": 3.6,
		    "emissions": 94
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI MAN. 5V 66KW (90CV) PK04",
		    "consumption": 3.6,
		    "emissions": 95
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI MAN. 5V 66KW (90CV) PK07",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI MAN. 5V 66KW (90CV) PK10",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 110KW (150CV) PK02",
		    "consumption": 4.7,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4.8,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 110KW (150CV) PK07",
		    "consumption": 5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 110KW (150CV) PK10",
		    "consumption": 5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 92KW (125CV) PK01",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 92KW (125CV) PK02",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 92KW (125CV) PK04",
		    "consumption": 5,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 92KW (125CV) PK07",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 92KW (125CV) PK10",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 110KW (150CV) PK02",
		    "consumption": 4.7,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 4.8,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 110KW (150CV) PK10",
		    "consumption": 5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK01",
		    "consumption": 4.9,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK02",
		    "consumption": 4.9,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK04",
		    "consumption": 5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK07",
		    "consumption": 5.1,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK10",
		    "consumption": 5.1,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK01",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK02",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK04",
		    "consumption": 3.9,
		    "emissions": 101
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK07",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK10",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI MAN. 5V 85KW (116CV) PK01",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI MAN. 5V 85KW (116CV) PK02",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI MAN. 5V 85KW (116CV) PK04",
		    "consumption": 3.7,
		    "emissions": 98
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI MAN. 5V 85KW (116CV) PK07",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI MAN. 5V 85KW (116CV) PK10",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK03",
		    "consumption": 5.6,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A1 MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK05",
		    "consumption": 5.6,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A1 MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK08",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A1 MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK10",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI AUT. 7V 70KW (95CV) PK01",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI AUT. 7V 70KW (95CV) PK02",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI AUT. 7V 70KW (95CV) PK04",
		    "consumption": 4.5,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI AUT. 7V 70KW (95CV) PK07",
		    "consumption": 4.6,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI AUT. 7V 70KW (95CV) PK10",
		    "consumption": 4.6,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI MAN. 5V 70KW (95CV) PK01",
		    "consumption": 4.2,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI MAN. 5V 70KW (95CV) PK02",
		    "consumption": 4.2,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI MAN. 5V 70KW (95CV) PK04",
		    "consumption": 4.3,
		    "emissions": 98
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI MAN. 5V 70KW (95CV) PK07",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI MAN. 5V 70KW (95CV) PK10",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI AUT. 7V 66KW (90CV) PK01",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI AUT. 7V 66KW (90CV) PK02",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI AUT. 7V 66KW (90CV) PK04",
		    "consumption": 3.9,
		    "emissions": 101
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI AUT. 7V 66KW (90CV) PK07",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI AUT. 7V 66KW (90CV) PK10",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI MAN. 5V 66KW (90CV) PK01",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI MAN. 5V 66KW (90CV) PK02",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI MAN. 5V 66KW (90CV) PK04",
		    "consumption": 3.7,
		    "emissions": 98
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI MAN. 5V 66KW (90CV) PK07",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI MAN. 5V 66KW (90CV) PK10",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK02",
		    "consumption": 4.7,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4.8,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK07",
		    "consumption": 5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK10",
		    "consumption": 5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 92KW (125CV) PK01",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 92KW (125CV) PK02",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 92KW (125CV) PK04",
		    "consumption": 5,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 92KW (125CV) PK07",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 92KW (125CV) PK10",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 110KW (150CV) PK02",
		    "consumption": 4.7,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 4.8,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 110KW (150CV) PK10",
		    "consumption": 5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 92KW (125CV) PK01",
		    "consumption": 5.1,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 92KW (125CV) PK04",
		    "consumption": 5.1,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 92KW (125CV) PK07",
		    "consumption": 5.2,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 92KW (125CV) PK10",
		    "consumption": 5.2,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI AUT. 7V 85KW (116CV) PK01",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI AUT. 7V 85KW (116CV) PK02",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI AUT. 7V 85KW (116CV) PK04",
		    "consumption": 3.9,
		    "emissions": 101
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI AUT. 7V 85KW (116CV) PK07",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI AUT. 7V 85KW (116CV) PK10",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI MAN. 5V 85KW (116CV) PK01",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI MAN. 5V 85KW (116CV) PK02",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI MAN. 5V 85KW (116CV) PK04",
		    "consumption": 3.7,
		    "emissions": 98
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI MAN. 5V 85KW (116CV) PK07",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI MAN. 5V 85KW (116CV) PK10",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK03",
		    "consumption": 5.6,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK05",
		    "consumption": 5.6,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK08",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK10",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI AUT. 7V 85KW (116CV) PK40",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI AUT. 7V 85KW (116CV) PK41",
		    "consumption": 5.2,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI AUT. 7V 85KW (116CV) PK42",
		    "consumption": 5.3,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI AUT. 7V 85KW (116CV) PK43",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI MAN. 6V 85KW (116CV) PK40",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI MAN. 6V 85KW (116CV) PK41",
		    "consumption": 5.4,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI MAN. 6V 85KW (116CV) PK42",
		    "consumption": 5.5,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI MAN. 6V 85KW (116CV) PK43",
		    "consumption": 5.5,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI AUT. 7V 110KW (150CV) PK40",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI AUT. 7V 110KW (150CV) PK41",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI AUT. 7V 110KW (150CV) PK42",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI AUT. 7V 110KW (150CV) PK43",
		    "consumption": 5.2,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI AUT. 7V 110KW (150CV) PK44",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI AUT. 7V 110KW (150CV) PK45",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI MAN. 6V 110KW (150CV) PK40",
		    "consumption": 5.2,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI MAN. 6V 110KW (150CV) PK41",
		    "consumption": 5.3,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI MAN. 6V 110KW (150CV) PK42",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI MAN. 6V 110KW (150CV) PK43",
		    "consumption": 5.3,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI MAN. 6V 110KW (150CV) PK44",
		    "consumption": 5.4,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI MAN. 6V 110KW (150CV) PK45",
		    "consumption": 5.4,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 110KW (150CV) PK40",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 110KW (150CV) PK41",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 110KW (150CV) PK42",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 110KW (150CV) PK43",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 110KW (150CV) PK44",
		    "consumption": 4.7,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 110KW (150CV) PK45",
		    "consumption": 4.7,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK40",
		    "consumption": 5,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK41",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK42",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK43",
		    "consumption": 5.2,
		    "emissions": 135
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK44",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK45",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) PK40",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) PK41",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) PK42",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) PK43",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) PK44",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) PK45",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK40",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK41",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK42",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK43",
		    "consumption": 4.9,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK44",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK45",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK40",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK41",
		    "consumption": 6,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK42",
		    "consumption": 6.1,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK43",
		    "consumption": 6.2,
		    "emissions": 141
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK44",
		    "consumption": 6.3,
		    "emissions": 143
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK45",
		    "consumption": 6.3,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK40",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK40",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK41",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK41",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK42",
		    "consumption": 5.7,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK42",
		    "consumption": 5.8,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK43",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK43",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK44",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK44",
		    "consumption": 6,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK45",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK45",
		    "consumption": 6,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.0 TSI AUT. 7V 85KW (115CV) PK43",
		    "consumption": 4.6,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.0 TSI MAN. 6V 85KW (115CV) PK43",
		    "consumption": 4.6,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI AUT. 7V 110KW (150CV) PK40",
		    "consumption": 4.8,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI AUT. 7V 110KW (150CV) PK41",
		    "consumption": 4.9,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI AUT. 7V 110KW (150CV) PK42",
		    "consumption": 5,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI AUT. 7V 110KW (150CV) PK43",
		    "consumption": 5,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI AUT. 7V 110KW (150CV) PK44",
		    "consumption": 5.1,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI AUT. 7V 110KW (150CV) PK45",
		    "consumption": 5.1,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI MAN. 6V 110KW (150CV) PK40",
		    "consumption": 5,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI MAN. 6V 110KW (150CV) PK41",
		    "consumption": 5,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI MAN. 6V 110KW (150CV) PK42",
		    "consumption": 5.1,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI MAN. 6V 110KW (150CV) PK43",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI MAN. 6V 110KW (150CV) PK44",
		    "consumption": 5.2,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI MAN. 6V 110KW (150CV) PK45",
		    "consumption": 5.2,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI AUT. 7V 85KW (116CV) PK40",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI AUT. 7V 85KW (116CV) PK41",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI AUT. 7V 85KW (116CV) PK42",
		    "consumption": 4,
		    "emissions": 105
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI AUT. 7V 85KW (116CV) PK43",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI MAN. 6V 85KW (116CV) PK40",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI MAN. 6V 85KW (116CV) PK41",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI MAN. 6V 85KW (116CV) PK42",
		    "consumption": 4.1,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI MAN. 6V 85KW (116CV) PK43",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK40",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK41",
		    "consumption": 4.4,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK42",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK43",
		    "consumption": 4.5,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK44",
		    "consumption": 4.6,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK45",
		    "consumption": 4.6,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK40",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK41",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK42",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK43",
		    "consumption": 5,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK44",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK45",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK40",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK41",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK42",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK43",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK44",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK45",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK40",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK41",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK42",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK43",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK44",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK45",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK40",
		    "consumption": 5.6,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK41",
		    "consumption": 5.7,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK42",
		    "consumption": 5.7,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK43",
		    "consumption": 5.8,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK44",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK45",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK40",
		    "consumption": 5.5,
		    "emissions": 125
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK41",
		    "consumption": 5.6,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK42",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK43",
		    "consumption": 5.7,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK44",
		    "consumption": 5.8,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK45",
		    "consumption": 5.8,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI AUT. 7V 85KW (115CV) PK31",
		    "consumption": 4.5,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI AUT. 7V 85KW (115CV) PK32",
		    "consumption": 4.6,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI AUT. 7V 85KW (115CV) PK33",
		    "consumption": 4.7,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI AUT. 7V 85KW (115CV) PK34",
		    "consumption": 4.7,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI MAN. 6V 85KW (115CV) PK31",
		    "consumption": 4.5,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI MAN. 6V 85KW (115CV) PK32",
		    "consumption": 4.6,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI MAN. 6V 85KW (115CV) PK33",
		    "consumption": 4.7,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI MAN. 6V 85KW (115CV) PK34",
		    "consumption": 4.7,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI AUT. 7V 110KW (150CV) PK31",
		    "consumption": 4.7,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI AUT. 7V 110KW (150CV) PK32",
		    "consumption": 4.8,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 4.9,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI MAN. 6V 110KW (150CV) PK31",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI MAN. 6V 110KW (150CV) PK32",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI MAN. 6V 110KW (150CV) PK33",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI MAN. 6V 110KW (150CV) PK34",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI MAN. 6V 110KW (150CV) PK35",
		    "consumption": 5.2,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI MAN. 6V 110KW (150CV) PK36",
		    "consumption": 5.2,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK31",
		    "consumption": 3.9,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK31",
		    "consumption": 3.9,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK32",
		    "consumption": 4,
		    "emissions": 105
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK32",
		    "consumption": 4,
		    "emissions": 105
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK33",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK33",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK34",
		    "consumption": 4,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK34",
		    "consumption": 4,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK31",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK32",
		    "consumption": 4.1,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK33",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK34",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK35",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK40",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK43",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK31",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK32",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 4.4,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK31",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK32",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK33",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK34",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK35",
		    "consumption": 5,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK36",
		    "consumption": 5,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK31",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK32",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK33",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK34",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK35",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK36",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK31",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK32",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK33",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK34",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK31",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK32",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK33",
		    "consumption": 5.8,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK34",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK36",
		    "consumption": 6,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK31",
		    "consumption": 5.5,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK32",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 5.6,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK36",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 SPORTBACK E-TRON MY18 1.4 TSI AUT. 6V 110KW (150CV) PK21",
		    "consumption": 1.6,
		    "emissions": 36
		  },
		  {
		    "model": "Audi A3 SPORTBACK E-TRON MY18 1.4 TSI AUT. 6V 110KW (150CV) PK22",
		    "consumption": 1.7,
		    "emissions": 38
		  },
		  {
		    "model": "Audi A3 SPORTBACK E-TRON MY18 1.4 TSI AUT. 6V 110KW (150CV) PK23",
		    "consumption": 1.8,
		    "emissions": 40
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI AUT. 7V 81KW (110CV) PK31",
		    "consumption": 5,
		    "emissions": 89
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI AUT. 7V 81KW (110CV) PK32",
		    "consumption": 5.1,
		    "emissions": 91
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI AUT. 7V 81KW (110CV) PK33",
		    "consumption": 5.2,
		    "emissions": 92
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI AUT. 7V 81KW (110CV) PK34",
		    "consumption": 5.2,
		    "emissions": 93
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI MAN. 6V 81KW (110CV) PK31",
		    "consumption": 5.2,
		    "emissions": 92
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI MAN. 6V 81KW (110CV) PK32",
		    "consumption": 5.3,
		    "emissions": 94
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI MAN. 6V 81KW (110CV) PK33",
		    "consumption": 5.3,
		    "emissions": 95
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI MAN. 6V 81KW (110CV) PK34",
		    "consumption": 5.4,
		    "emissions": 96
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI AUT. 7V 85KW (115CV) PK31",
		    "consumption": 4.5,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI AUT. 7V 85KW (115CV) PK32",
		    "consumption": 4.6,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI AUT. 7V 85KW (115CV) PK33",
		    "consumption": 4.7,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI AUT. 7V 85KW (115CV) PK34",
		    "consumption": 4.7,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI MAN. 6V 85KW (115CV) PK31",
		    "consumption": 4.5,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI MAN. 6V 85KW (115CV) PK32",
		    "consumption": 4.6,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI MAN. 6V 85KW (115CV) PK33",
		    "consumption": 4.7,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI MAN. 6V 85KW (115CV) PK34",
		    "consumption": 4.7,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI AUT. 7V 110KW (150CV) PK31",
		    "consumption": 4.8,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI AUT. 7V 110KW (150CV) PK32",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 5,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI MAN. 6V 110KW (150CV) PK31",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI MAN. 6V 110KW (150CV) PK32",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI MAN. 6V 110KW (150CV) PK33",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI MAN. 6V 110KW (150CV) PK34",
		    "consumption": 5.2,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI MAN. 6V 110KW (150CV) PK35",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI MAN. 6V 110KW (150CV) PK36",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.6 TDI MAN. 6V 85KW (116CV) PK31",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.6 TDI MAN. 6V 85KW (116CV) PK32",
		    "consumption": 4.1,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.6 TDI MAN. 6V 85KW (116CV) PK33",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.6 TDI MAN. 6V 85KW (116CV) PK34",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK31",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK32",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK31",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK32",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK33",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK34",
		    "consumption": 5,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK35",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK36",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK31",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK32",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK33",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK34",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK35",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK36",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK31",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK32",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK33",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK34",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK35",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK36",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK31",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK32",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK33",
		    "consumption": 5.8,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK34",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK35",
		    "consumption": 6,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK36",
		    "consumption": 6,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK31",
		    "consumption": 5.5,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK32",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 5.6,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK36",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI AUT. 7V 120KW (163CV) PK39",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI AUT. 7V 120KW (163CV) PK40",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI AUT. 7V 120KW (163CV) PK41",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI AUT. 7V 140KW (190CV) PK39",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI AUT. 7V 140KW (190CV) PK40",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI AUT. 7V 140KW (190CV) PK41",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI MAN. 6V 110KW (150CV) PK39",
		    "consumption": 4.9,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI MAN. 6V 110KW (150CV) PK40",
		    "consumption": 5.1,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI MAN. 6V 110KW (150CV) PK41",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK39",
		    "consumption": 6.5,
		    "emissions": 148
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK40",
		    "consumption": 6.8,
		    "emissions": 153
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK41",
		    "consumption": 6.8,
		    "emissions": 154
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 3.0 TDI AUT. 7V 160KW (218CV) PK39",
		    "consumption": 5.1,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 3.0 TDI AUT. 7V 160KW (218CV) PK40",
		    "consumption": 5.2,
		    "emissions": 141
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 3.0 TDI AUT. 7V 160KW (218CV) PK41",
		    "consumption": 5.3,
		    "emissions": 143
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 3.0 TDI AUT. 8V 200KW (272CV) PK39",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 3.0 TDI AUT. 8V 200KW (272CV) PK40",
		    "consumption": 5.4,
		    "emissions": 143
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 3.0 TDI AUT. 8V 200KW (272CV) PK41",
		    "consumption": 5.5,
		    "emissions": 146
		  },
		  {
		    "model": "Audi A4 AVANT G-TRON MY18 2.0 TFSI AUT. 7V 125KW (170CV) PK05",
		    "consumption": 6.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A4 AVANT G-TRON MY18 2.0 TFSI AUT. 7V 125KW (170CV) PK06",
		    "consumption": 6.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A4 AVANT G-TRON MY18 2.0 TFSI AUT. 7V 125KW (170CV) PK07",
		    "consumption": 6.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A4 AVANT G-TRON MY18 2.0 TFSI AUT. 7V 125KW (170CV) PK08",
		    "consumption": 6.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A4 AVANT MY18 1.4 TSI MAN. 6V 110KW (150CV) PK02",
		    "consumption": 5.4,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A4 AVANT MY18 1.4 TSI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 5.5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A4 AVANT MY18 1.4 TSI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 5.5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A4 AVANT MY18 1.4 TSI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 5.6,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A4 AVANT MY18 1.4 TSI MAN. 6V 110KW (150CV) PK08",
		    "consumption": 5.8,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK01",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK02",
		    "consumption": 4.1,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK05",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK06",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK07",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK08",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK10",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK11",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK12",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK13",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK10",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK11",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK12",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK13",
		    "consumption": 4.7,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK02",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 4.1,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 4.1,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK08",
		    "consumption": 4.3,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK31",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK02",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK05",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK06",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK07",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK08",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK10",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK11",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK12",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK13",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK01",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK02",
		    "consumption": 4,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK04",
		    "consumption": 4.1,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK05",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK06",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK07",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK08",
		    "consumption": 4.3,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK01",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK02",
		    "consumption": 5.2,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK04",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK05",
		    "consumption": 5.3,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK06",
		    "consumption": 5.3,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK07",
		    "consumption": 5.4,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK08",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK10",
		    "consumption": 6.5,
		    "emissions": 146
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK11",
		    "consumption": 6.5,
		    "emissions": 146
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK12",
		    "consumption": 6.6,
		    "emissions": 149
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK13",
		    "consumption": 6.6,
		    "emissions": 150
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK10",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK11",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK14",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK15",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK10",
		    "consumption": 4.7,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK11",
		    "consumption": 4.7,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK14",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK15",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK27",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK28",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK29",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK30",
		    "consumption": 5.4,
		    "emissions": 142
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 1.4 TSI MAN. 6V 110KW (150CV) PK02",
		    "consumption": 5.2,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 1.4 TSI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 5.3,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 1.4 TSI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 5.3,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 1.4 TSI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 5.4,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 1.4 TSI MAN. 6V 110KW (150CV) PK08",
		    "consumption": 5.5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK01",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK02",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 3.9,
		    "emissions": 101
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK05",
		    "consumption": 4.1,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK06",
		    "consumption": 4.1,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK07",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK08",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK10",
		    "consumption": 4.1,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK11",
		    "consumption": 4.1,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK12",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK13",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK10",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK11",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK12",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK13",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK01",
		    "consumption": 3.7,
		    "emissions": 95
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK02",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK08",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK31",
		    "consumption": 3.7,
		    "emissions": 95
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK02",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK05",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK06",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK07",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK08",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK10",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK11",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK12",
		    "consumption": 4.4,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK13",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK01",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK02",
		    "consumption": 3.8,
		    "emissions": 98
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK04",
		    "consumption": 3.9,
		    "emissions": 101
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK05",
		    "consumption": 4,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK06",
		    "consumption": 4,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK07",
		    "consumption": 4,
		    "emissions": 105
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK08",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK01",
		    "consumption": 4.8,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK02",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK04",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK05",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK06",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK07",
		    "consumption": 5.3,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK08",
		    "consumption": 5.4,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK10",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK11",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK14",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK15",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK10",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK11",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK14",
		    "consumption": 4.7,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK15",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK27",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK28",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK29",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK30",
		    "consumption": 5.2,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) PK33",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) PK34",
		    "consumption": 4.6,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) PK35",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) PK36",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK33",
		    "consumption": 4.7,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK34",
		    "consumption": 4.9,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK35",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK36",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK33",
		    "consumption": 5.6,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK34",
		    "consumption": 5.8,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK35",
		    "consumption": 5.8,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK34",
		    "consumption": 6.5,
		    "emissions": 149
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK35",
		    "consumption": 6.6,
		    "emissions": 151
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK36",
		    "consumption": 6.7,
		    "emissions": 152
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 6,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 6.1,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK21",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK22",
		    "consumption": 5.2,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK23",
		    "consumption": 5.2,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK33",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 4.3,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) PK33",
		    "consumption": 4.1,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) PK34",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) PK35",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) PK42",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK33",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK34",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK35",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 110KW (150CV) PK33",
		    "consumption": 4.1,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 110KW (150CV) PK34",
		    "consumption": 4.2,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 110KW (150CV) PK35",
		    "consumption": 4.2,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 110KW (150CV) PK36",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 4.4,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 140KW (190CV) PK42",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK33",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK34",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK35",
		    "consumption": 5.4,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK36",
		    "consumption": 5.4,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK34",
		    "consumption": 6.2,
		    "emissions": 141
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK35",
		    "consumption": 6.3,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK36",
		    "consumption": 6.3,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 5.6,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK36",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK18",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK19",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK33",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK37",
		    "consumption": 4.7,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK18",
		    "consumption": 5.2,
		    "emissions": 135
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK19",
		    "consumption": 5.2,
		    "emissions": 135
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK33",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK37",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 5.4,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 5.6,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 5.6,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 4.3,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) PK33",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) PK34",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) PK35",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) PK42",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) PK48",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK33",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK34",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK35",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK36",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK33",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK34",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK35",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK36",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK34",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) PK42",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) PK48",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) QUATTRO PK33",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) QUATTRO PK34",
		    "consumption": 4.8,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) QUATTRO PK35",
		    "consumption": 4.8,
		    "emissions": 125
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) QUATTRO PK36",
		    "consumption": 4.8,
		    "emissions": 125
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK33",
		    "consumption": 5.4,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK34",
		    "consumption": 5.5,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK35",
		    "consumption": 5.5,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK33",
		    "consumption": 6.4,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK34",
		    "consumption": 6.5,
		    "emissions": 147
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK35",
		    "consumption": 6.5,
		    "emissions": 148
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK36",
		    "consumption": 6.5,
		    "emissions": 148
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 5.7,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 5.8,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 5.9,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK18",
		    "consumption": 4.8,
		    "emissions": 125
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK33",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK37",
		    "consumption": 4.8,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK18",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK19",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK20",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK37",
		    "consumption": 5.2,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK24",
		    "consumption": 7.3,
		    "emissions": 166
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK25",
		    "consumption": 7.5,
		    "emissions": 170
		  },
		  {
		    "model": "Audi A6 ALLROAD QUATTRO MY18 3.0 TDI AUT. 7V 160KW (218CV) PK07",
		    "consumption": 5.5,
		    "emissions": 145
		  },
		  {
		    "model": "Audi A6 ALLROAD QUATTRO MY18 3.0 TDI AUT. 7V 160KW (218CV) PK07",
		    "consumption": 5.7,
		    "emissions": 149
		  },
		  {
		    "model": "Audi A6 ALLROAD QUATTRO MY18 3.0 TDI AUT. 7V 200KW (272CV) PK07",
		    "consumption": 5.6,
		    "emissions": 149
		  },
		  {
		    "model": "Audi A6 ALLROAD QUATTRO MY18 3.0 TDI AUT. 8V 235KW (320CV) PK07",
		    "consumption": 6.5,
		    "emissions": 172
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK01",
		    "consumption": 5.9,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK03",
		    "consumption": 5.9,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK04",
		    "consumption": 5.9,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK06",
		    "consumption": 6,
		    "emissions": 142
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK01",
		    "consumption": 6.2,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK03",
		    "consumption": 6.2,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK04",
		    "consumption": 6.2,
		    "emissions": 146
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK06",
		    "consumption": 6.4,
		    "emissions": 149
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK01",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK03",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK01",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK03",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK04",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK06",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK01",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK03",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK04",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK13",
		    "consumption": 5.2,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK01",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK03",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK01",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK03",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK04",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK06",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK03",
		    "consumption": 6,
		    "emissions": 140
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK04",
		    "consumption": 6.1,
		    "emissions": 143
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK06",
		    "consumption": 6.2,
		    "emissions": 146
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK03",
		    "consumption": 6.9,
		    "emissions": 158
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK04",
		    "consumption": 7,
		    "emissions": 159
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK13",
		    "consumption": 7.1,
		    "emissions": 163
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK02",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK02",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK03",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK03",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK04",
		    "consumption": 4.5,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK04",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK06",
		    "consumption": 4.6,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK06",
		    "consumption": 4.8,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK03",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK03",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK04",
		    "consumption": 5.2,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK04",
		    "consumption": 5.3,
		    "emissions": 140
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK13",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK13",
		    "consumption": 5.4,
		    "emissions": 143
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK03",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK04",
		    "consumption": 5.3,
		    "emissions": 140
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK13",
		    "consumption": 5.4,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK03",
		    "consumption": 6.2,
		    "emissions": 164
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK04",
		    "consumption": 6.3,
		    "emissions": 166
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK13",
		    "consumption": 6.4,
		    "emissions": 169
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 8V 240KW (326CV) QUATTRO PK13",
		    "consumption": 6.4,
		    "emissions": 169
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK01",
		    "consumption": 5.7,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK03",
		    "consumption": 5.7,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK04",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK06",
		    "consumption": 5.9,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK01",
		    "consumption": 5.9,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK03",
		    "consumption": 5.9,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK04",
		    "consumption": 6,
		    "emissions": 140
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK06",
		    "consumption": 6.1,
		    "emissions": 143
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK01",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK03",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK06",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK01",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK03",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK04",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK06",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK02",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK03",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK04",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK06",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK13",
		    "consumption": 5,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK01",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK03",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 4.5,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK01",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK03",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK04",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK06",
		    "consumption": 4.5,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK03",
		    "consumption": 5.9,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK06",
		    "consumption": 6.1,
		    "emissions": 142
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK02",
		    "consumption": 6.7,
		    "emissions": 153
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK03",
		    "consumption": 6.7,
		    "emissions": 153
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK04",
		    "consumption": 6.8,
		    "emissions": 154
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK13",
		    "consumption": 6.9,
		    "emissions": 158
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK02",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK02",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK03",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK04",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK04",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK06",
		    "consumption": 4.5,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK06",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK02",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK02",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK03",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK04",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK04",
		    "consumption": 5.1,
		    "emissions": 135
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK13",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK13",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK03",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK04",
		    "consumption": 5.1,
		    "emissions": 135
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK13",
		    "consumption": 5.2,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK03",
		    "consumption": 6,
		    "emissions": 159
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK04",
		    "consumption": 6.1,
		    "emissions": 161
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK13",
		    "consumption": 6.2,
		    "emissions": 164
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 8V 240KW (326CV) QUATTRO PK13",
		    "consumption": 6.2,
		    "emissions": 164
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK09",
		    "consumption": 6,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK11",
		    "consumption": 6.1,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK12",
		    "consumption": 6.1,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK09",
		    "consumption": 6.9,
		    "emissions": 157
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK11",
		    "consumption": 7.1,
		    "emissions": 161
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK12",
		    "consumption": 7.1,
		    "emissions": 161
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) PK09",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) PK09",
		    "consumption": 4.7,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) PK11",
		    "consumption": 4.6,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) PK11",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) PK12",
		    "consumption": 4.6,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) PK12",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK09",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK09",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK11",
		    "consumption": 5.3,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK11",
		    "consumption": 5.4,
		    "emissions": 141
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK12",
		    "consumption": 5.3,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK12",
		    "consumption": 5.4,
		    "emissions": 141
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK09",
		    "consumption": 5.2,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK11",
		    "consumption": 5.4,
		    "emissions": 142
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK12",
		    "consumption": 5.4,
		    "emissions": 142
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK09",
		    "consumption": 6.2,
		    "emissions": 164
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK11",
		    "consumption": 6.3,
		    "emissions": 167
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK12",
		    "consumption": 6.3,
		    "emissions": 167
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 8V 240KW (326CV) QUATTRO PK11",
		    "consumption": 6.3,
		    "emissions": 167
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 8V 240KW (326CV) QUATTRO PK12",
		    "consumption": 6.3,
		    "emissions": 167
		  },
		  {
		    "model": "Audi A8 L MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK01",
		    "consumption": 5.9,
		    "emissions": 155
		  },
		  {
		    "model": "Audi A8 L MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK03",
		    "consumption": 6,
		    "emissions": 159
		  },
		  {
		    "model": "Audi A8 L MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK05",
		    "consumption": 6,
		    "emissions": 159
		  },
		  {
		    "model": "Audi A8 L MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK06",
		    "consumption": 6.1,
		    "emissions": 161
		  },
		  {
		    "model": "Audi A8 L MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK08",
		    "consumption": 6.1,
		    "emissions": 161
		  },
		  {
		    "model": "Audi A8 L MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK10",
		    "consumption": 5.8,
		    "emissions": 153
		  },
		  {
		    "model": "Audi A8 L MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK02",
		    "consumption": 9,
		    "emissions": 207
		  },
		  {
		    "model": "Audi A8 L MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK04",
		    "consumption": 9.2,
		    "emissions": 211
		  },
		  {
		    "model": "Audi A8 L MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK05",
		    "consumption": 9.2,
		    "emissions": 211
		  },
		  {
		    "model": "Audi A8 L MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK08",
		    "consumption": 9.3,
		    "emissions": 215
		  },
		  {
		    "model": "Audi A8 L MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK02",
		    "consumption": 7.3,
		    "emissions": 190
		  },
		  {
		    "model": "Audi A8 L MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK04",
		    "consumption": 7.4,
		    "emissions": 194
		  },
		  {
		    "model": "Audi A8 L MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK05",
		    "consumption": 7.4,
		    "emissions": 194
		  },
		  {
		    "model": "Audi A8 L MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK08",
		    "consumption": 7.5,
		    "emissions": 197
		  },
		  {
		    "model": "Audi A8 L MY18 6.3 FSI AUT. 8V 368KW (500CV) QUATTRO PK05",
		    "consumption": 11,
		    "emissions": 254
		  },
		  {
		    "model": "Audi A8 L MY18 6.3 FSI AUT. 8V 368KW (500CV) QUATTRO PK08",
		    "consumption": 11.2,
		    "emissions": 259
		  },
		  {
		    "model": "Audi A8 MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK01",
		    "consumption": 5.8,
		    "emissions": 151
		  },
		  {
		    "model": "Audi A8 MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK03",
		    "consumption": 5.9,
		    "emissions": 155
		  },
		  {
		    "model": "Audi A8 MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK05",
		    "consumption": 5.9,
		    "emissions": 155
		  },
		  {
		    "model": "Audi A8 MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK06",
		    "consumption": 6,
		    "emissions": 157
		  },
		  {
		    "model": "Audi A8 MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK08",
		    "consumption": 6,
		    "emissions": 157
		  },
		  {
		    "model": "Audi A8 MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK10",
		    "consumption": 5.7,
		    "emissions": 149
		  },
		  {
		    "model": "Audi A8 MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK02",
		    "consumption": 8.9,
		    "emissions": 206
		  },
		  {
		    "model": "Audi A8 MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK04",
		    "consumption": 9.1,
		    "emissions": 210
		  },
		  {
		    "model": "Audi A8 MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK05",
		    "consumption": 9.1,
		    "emissions": 210
		  },
		  {
		    "model": "Audi A8 MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK08",
		    "consumption": 9.3,
		    "emissions": 214
		  },
		  {
		    "model": "Audi A8 MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK02",
		    "consumption": 7.2,
		    "emissions": 189
		  },
		  {
		    "model": "Audi A8 MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK04",
		    "consumption": 7.4,
		    "emissions": 193
		  },
		  {
		    "model": "Audi A8 MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK05",
		    "consumption": 7.4,
		    "emissions": 193
		  },
		  {
		    "model": "Audi A8 MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK08",
		    "consumption": 7.5,
		    "emissions": 196
		  },
		  {
		    "model": "Audi Q2 1.4 TSI AUT. 7V 110KW (150CV) PK05",
		    "consumption": 5.4,
		    "emissions": 123
		  },
		  {
		    "model": "Audi Q2 1.4 TSI AUT. 7V 110KW (150CV) PK06",
		    "consumption": 5.5,
		    "emissions": 125
		  },
		  {
		    "model": "Audi Q2 1.4 TSI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q2 1.4 TSI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi Q2 1.6 TDI AUT. 7V 85KW (116CV) PK05",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi Q2 1.6 TDI AUT. 7V 85KW (116CV) PK06",
		    "consumption": 4.3,
		    "emissions": 114
		  },
		  {
		    "model": "Audi Q2 1.6 TDI MAN. 6V 85KW (116CV) PK05",
		    "consumption": 4.6,
		    "emissions": 118
		  },
		  {
		    "model": "Audi Q2 1.6 TDI MAN. 6V 85KW (116CV) PK06",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi Q2 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK05",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi Q2 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK06",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi Q2 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK05",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q2 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK06",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI AUT. 6V 110KW (150CV) PK02",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI AUT. 6V 110KW (150CV) PK07",
		    "consumption": 6.2,
		    "emissions": 143
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI AUT. 6V 110KW (150CV) PK08",
		    "consumption": 6.2,
		    "emissions": 143
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK03",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK05",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK06",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK07",
		    "consumption": 6.1,
		    "emissions": 141
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK08",
		    "consumption": 6.1,
		    "emissions": 141
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK03",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK03",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4.7,
		    "emissions": 122
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK05",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK05",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK06",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK06",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK07",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK07",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK08",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK08",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK03",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK05",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK06",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK07",
		    "consumption": 5.3,
		    "emissions": 140
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK08",
		    "consumption": 5.3,
		    "emissions": 140
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK03",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK03",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK05",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK05",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK06",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK06",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK07",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK07",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK08",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK08",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK03",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK08",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK03",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK06",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK07",
		    "consumption": 5.2,
		    "emissions": 138
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK08",
		    "consumption": 5.2,
		    "emissions": 138
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 135KW (184CV) QUATTRO PK08",
		    "consumption": 5.6,
		    "emissions": 146
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 88KW (120CV) PK03",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 88KW (120CV) PK05",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 88KW (120CV) PK06",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 88KW (120CV) PK07",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 88KW (120CV) PK08",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TFSI AUT. 7V 132KW (180CV) QUATTRO PK06",
		    "consumption": 6.7,
		    "emissions": 155
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TFSI AUT. 7V 132KW (180CV) QUATTRO PK07",
		    "consumption": 7,
		    "emissions": 161
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TFSI AUT. 7V 132KW (180CV) QUATTRO PK08",
		    "consumption": 7,
		    "emissions": 161
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 120KW (163CV) QUATTRO PK03",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 120KW (163CV) QUATTRO PK04",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 120KW (163CV) QUATTRO PK05",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 120KW (163CV) QUATTRO PK06",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 120KW (163CV) QUATTRO PK07",
		    "consumption": 5.2,
		    "emissions": 136
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 120KW (163CV) QUATTRO PK09",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK03",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK04",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK05",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK06",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK07",
		    "consumption": 5.2,
		    "emissions": 136
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK09",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK03",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK09",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK03",
		    "consumption": 6.8,
		    "emissions": 154
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK04",
		    "consumption": 6.9,
		    "emissions": 157
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK05",
		    "consumption": 6.9,
		    "emissions": 157
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK06",
		    "consumption": 7,
		    "emissions": 159
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK07",
		    "consumption": 7.1,
		    "emissions": 162
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK09",
		    "consumption": 7.2,
		    "emissions": 164
		  },
		  {
		    "model": "Audi Q7 E-TRON MY18 3.0 TDI AUT. 8V 190KW (258CV) 5PL QUATTRO PK03",
		    "consumption": 1.9,
		    "emissions": 50
		  },
		  {
		    "model": "Audi Q7 E-TRON MY18 3.0 TDI AUT. 8V 190KW (258CV) 5PL QUATTRO PK08",
		    "consumption": 1.8,
		    "emissions": 48
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 5PL QUATTRO PK01",
		    "consumption": 5.5,
		    "emissions": 144
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 5PL QUATTRO PK02",
		    "consumption": 5.6,
		    "emissions": 146
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 5PL QUATTRO PK05",
		    "consumption": 6,
		    "emissions": 157
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 5PL QUATTRO PK09",
		    "consumption": 6,
		    "emissions": 157
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 7PL QUATTRO PK01",
		    "consumption": 5.7,
		    "emissions": 148
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 7PL QUATTRO PK02",
		    "consumption": 5.8,
		    "emissions": 150
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 7PL QUATTRO PK05",
		    "consumption": 6.2,
		    "emissions": 161
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 7PL QUATTRO PK09",
		    "consumption": 6.2,
		    "emissions": 161
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 200KW (272CV) 5PL QUATTRO PK02",
		    "consumption": 5.7,
		    "emissions": 149
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 200KW (272CV) 5PL QUATTRO PK05",
		    "consumption": 6.1,
		    "emissions": 159
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 200KW (272CV) 5PL QUATTRO PK09",
		    "consumption": 6.1,
		    "emissions": 159
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 200KW (272CV) 7PL QUATTRO PK02",
		    "consumption": 5.9,
		    "emissions": 153
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 200KW (272CV) 7PL QUATTRO PK05",
		    "consumption": 6.2,
		    "emissions": 163
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 200KW (272CV) 7PL QUATTRO PK09",
		    "consumption": 6.2,
		    "emissions": 163
		  },
		  {
		    "model": "Audi R8 COUPÉ MY17 5.2 FSI+SRE AUT. 7V 397KW (540CV) QUATTRO",
		    "consumption": 11.4,
		    "emissions": 272
		  },
		  {
		    "model": "Audi R8 COUPÉ MY17 5.2 FSI+SRE AUT. 7V 449KW (610CV) QUATTRO",
		    "consumption": 12.3,
		    "emissions": 287
		  },
		  {
		    "model": "Audi R8 SPYDER MY17 5.2 FSI+SRE AUT. 7V 397KW (540CV) QUATTRO",
		    "consumption": 11.7,
		    "emissions": 277
		  },
		  {
		    "model": "Audi RS 3 LIMOUSINE MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK51",
		    "consumption": 8.3,
		    "emissions": 188
		  },
		  {
		    "model": "Audi RS 3 LIMOUSINE MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK52",
		    "consumption": 8.4,
		    "emissions": 191
		  },
		  {
		    "model": "Audi RS 3 LIMOUSINE MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK53",
		    "consumption": 8.3,
		    "emissions": 188
		  },
		  {
		    "model": "Audi RS 3 LIMOUSINE MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK54",
		    "consumption": 8.4,
		    "emissions": 191
		  },
		  {
		    "model": "Audi RS 3 SPORTBACK MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK01",
		    "consumption": 8.3,
		    "emissions": 189
		  },
		  {
		    "model": "Audi RS 3 SPORTBACK MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK02",
		    "consumption": 8.4,
		    "emissions": 192
		  },
		  {
		    "model": "Audi RS 3 SPORTBACK MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK03",
		    "consumption": 8.3,
		    "emissions": 189
		  },
		  {
		    "model": "Audi RS 3 SPORTBACK MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK04",
		    "consumption": 8.4,
		    "emissions": 192
		  },
		  {
		    "model": "Audi RS 6 AVANT MY18 4.0 FSI AUT. 8V 412KW (560CV) QUATTRO",
		    "consumption": 9.6,
		    "emissions": 223
		  },
		  {
		    "model": "Audi RS 6 AVANT PERFOMANCE MY18 4.0 FSI AUT. 8V 445KW (605CV) QUATTRO",
		    "consumption": 9.6,
		    "emissions": 223
		  },
		  {
		    "model": "Audi RS 7 SPORTBACK MY18 4.0 FSI AUT. 8V 412KW (560CV) QUATTRO",
		    "consumption": 9.5,
		    "emissions": 221
		  },
		  {
		    "model": "Audi RS 7 SPORTBACK PERFOMANCE MY18 4.0 FSI AUT. 8V 445KW (605CV) QUATTRO",
		    "consumption": 9.5,
		    "emissions": 221
		  },
		  {
		    "model": "Audi S1 MY18 2.0 TFSI MAN. 6V 170KW (231CV) QUATTRO PK06",
		    "consumption": 7,
		    "emissions": 162
		  },
		  {
		    "model": "Audi S1 MY18 2.0 TFSI MAN. 6V 170KW (231CV) QUATTRO PK09",
		    "consumption": 7.1,
		    "emissions": 166
		  },
		  {
		    "model": "Audi S1 SPORTBACK MY18 2.0 TFSI MAN. 6V 170KW (231CV) QUATTRO PK06",
		    "consumption": 7.1,
		    "emissions": 166
		  },
		  {
		    "model": "Audi S1 SPORTBACK MY18 2.0 TFSI MAN. 6V 170KW (231CV) QUATTRO PK09",
		    "consumption": 7.2,
		    "emissions": 168
		  },
		  {
		    "model": "Audi S3 CABRIOLET MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK46",
		    "consumption": 6.7,
		    "emissions": 153
		  },
		  {
		    "model": "Audi S3 CABRIOLET MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK48",
		    "consumption": 6.8,
		    "emissions": 156
		  },
		  {
		    "model": "Audi S3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK47",
		    "consumption": 6.5,
		    "emissions": 149
		  },
		  {
		    "model": "Audi S3 MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK37",
		    "consumption": 6.4,
		    "emissions": 146
		  },
		  {
		    "model": "Audi S3 MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK39",
		    "consumption": 6.5,
		    "emissions": 149
		  },
		  {
		    "model": "Audi S3 SPORTBACK MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK37",
		    "consumption": 6.5,
		    "emissions": 149
		  },
		  {
		    "model": "Audi S3 SPORTBACK MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK39",
		    "consumption": 6.6,
		    "emissions": 152
		  },
		  {
		    "model": "Audi S4 AVANT MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK16",
		    "consumption": 7.5,
		    "emissions": 171
		  },
		  {
		    "model": "Audi S4 AVANT MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK17",
		    "consumption": 7.6,
		    "emissions": 175
		  },
		  {
		    "model": "Audi S4 LIMOUSINE MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK16",
		    "consumption": 7.3,
		    "emissions": 166
		  },
		  {
		    "model": "Audi S4 LIMOUSINE MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK17",
		    "consumption": 7.5,
		    "emissions": 170
		  },
		  {
		    "model": "Audi S5 CABRIOLET MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK24",
		    "consumption": 7.7,
		    "emissions": 175
		  },
		  {
		    "model": "Audi S5 CABRIOLET MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK25",
		    "consumption": 7.8,
		    "emissions": 177
		  },
		  {
		    "model": "Audi S5 CABRIOLET MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK26",
		    "consumption": 7.8,
		    "emissions": 177
		  },
		  {
		    "model": "Audi S5 COUPÉ MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK24",
		    "consumption": 7.3,
		    "emissions": 166
		  },
		  {
		    "model": "Audi S5 COUPÉ MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK25",
		    "consumption": 7.4,
		    "emissions": 170
		  },
		  {
		    "model": "Audi S5 COUPÉ MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK26",
		    "consumption": 7.4,
		    "emissions": 170
		  },
		  {
		    "model": "Audi S5 SPORTBACK MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK26",
		    "consumption": 7.5,
		    "emissions": 170
		  },
		  {
		    "model": "Audi S6 AVANT MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK05",
		    "consumption": 9.4,
		    "emissions": 219
		  },
		  {
		    "model": "Audi S6 AVANT MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK13",
		    "consumption": 9.6,
		    "emissions": 224
		  },
		  {
		    "model": "Audi S6 LIMOUSINE MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK05",
		    "consumption": 9.2,
		    "emissions": 214
		  },
		  {
		    "model": "Audi S6 LIMOUSINE MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK13",
		    "consumption": 9.4,
		    "emissions": 218
		  },
		  {
		    "model": "Audi S7 SPORTBACK MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK10",
		    "consumption": 9.3,
		    "emissions": 215
		  },
		  {
		    "model": "Audi S7 SPORTBACK MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK11",
		    "consumption": 9.5,
		    "emissions": 220
		  },
		  {
		    "model": "Audi S7 SPORTBACK MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK12",
		    "consumption": 9.5,
		    "emissions": 220
		  },
		  {
		    "model": "Audi S8 MY18 4.0 FSI AUT. 8V 382KW (520CV) QUATTRO PK05",
		    "consumption": 9.4,
		    "emissions": 216
		  },
		  {
		    "model": "Audi S8 MY18 4.0 FSI AUT. 8V 382KW (520CV) QUATTRO PK06",
		    "consumption": 9.6,
		    "emissions": 220
		  },
		  {
		    "model": "Audi S8 PLUS MY18 4.0 FSI AUT. 8V 445KW (605CV) QUATTRO PK11",
		    "consumption": 9.9,
		    "emissions": 229
		  },
		  {
		    "model": "Audi S8 PLUS MY18 4.0 FSI AUT. 8V 445KW (605CV) QUATTRO PK12",
		    "consumption": 10,
		    "emissions": 231
		  },
		  {
		    "model": "Audi S8 PLUS MY18 4.0 FSI AUT. 8V 445KW (605CV) QUATTRO PK14",
		    "consumption": 10,
		    "emissions": 231
		  },
		  {
		    "model": "Audi SQ5 MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK08",
		    "consumption": 8.3,
		    "emissions": 189
		  },
		  {
		    "model": "Audi SQ5 MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK10",
		    "consumption": 8.5,
		    "emissions": 195
		  },
		  {
		    "model": "Audi SQ7 MY18 4.0 TDI AUT. 8V 320KW (435CV) 5PL QUATTRO PK06",
		    "consumption": 7.5,
		    "emissions": 198
		  },
		  {
		    "model": "Audi SQ7 MY18 4.0 TDI AUT. 8V 320KW (435CV) 5PL QUATTRO PK07",
		    "consumption": 7.2,
		    "emissions": 189
		  },
		  {
		    "model": "Audi SQ7 MY18 4.0 TDI AUT. 8V 320KW (435CV) 5PL QUATTRO PK10",
		    "consumption": 7.5,
		    "emissions": 198
		  },
		  {
		    "model": "Audi SQ7 MY18 4.0 TDI AUT. 8V 320KW (435CV) 7PL QUATTRO PK06",
		    "consumption": 7.6,
		    "emissions": 199
		  },
		  {
		    "model": "Audi SQ7 MY18 4.0 TDI AUT. 8V 320KW (435CV) 7PL QUATTRO PK07",
		    "consumption": 7.2,
		    "emissions": 190
		  },
		  {
		    "model": "Audi SQ7 MY18 4.0 TDI AUT. 8V 320KW (435CV) 7PL QUATTRO PK10",
		    "consumption": 7.6,
		    "emissions": 199
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 1.8 TFSI AUT. 7V 132KW (180CV) PK02",
		    "consumption": 5.7,
		    "emissions": 129
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 1.8 TFSI AUT. 7V 132KW (180CV) PK03",
		    "consumption": 5.8,
		    "emissions": 131
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 1.8 TFSI AUT. 7V 132KW (180CV) PK04",
		    "consumption": 5.9,
		    "emissions": 133
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 1.8 TFSI MAN. 6V 132KW (180CV) PK02",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 1.8 TFSI MAN. 6V 132KW (180CV) PK03",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 1.8 TFSI MAN. 6V 132KW (180CV) PK04",
		    "consumption": 6,
		    "emissions": 138
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TDI MAN. 6V 135KW (184CV) PK02",
		    "consumption": 4.3,
		    "emissions": 114
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TDI MAN. 6V 135KW (184CV) PK02",
		    "consumption": 4.6,
		    "emissions": 122
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TDI MAN. 6V 135KW (184CV) PK03",
		    "consumption": 4.6,
		    "emissions": 123
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TDI MAN. 6V 135KW (184CV) PK03",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TDI MAN. 6V 135KW (184CV) PK04",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TDI MAN. 6V 135KW (184CV) PK04",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI AUT. 6V 169KW (230CV) PK02",
		    "consumption": 6.3,
		    "emissions": 146
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI AUT. 6V 169KW (230CV) PK03",
		    "consumption": 6.4,
		    "emissions": 148
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI AUT. 6V 169KW (230CV) PK04",
		    "consumption": 6.5,
		    "emissions": 150
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI AUT. 6V 169KW (230CV) QUATTRO PK02",
		    "consumption": 6.4,
		    "emissions": 149
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI AUT. 6V 169KW (230CV) QUATTRO PK03",
		    "consumption": 6.5,
		    "emissions": 151
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI AUT. 6V 169KW (230CV) QUATTRO PK04",
		    "consumption": 6.6,
		    "emissions": 153
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI MAN. 6V 169KW (230CV) PK02",
		    "consumption": 5.9,
		    "emissions": 137
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI MAN. 6V 169KW (230CV) PK03",
		    "consumption": 6,
		    "emissions": 139
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI MAN. 6V 169KW (230CV) PK04",
		    "consumption": 6.1,
		    "emissions": 141
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 1.8 TFSI AUT. 7V 132KW (180CV) PK02",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 1.8 TFSI AUT. 7V 132KW (180CV) PK03",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 1.8 TFSI AUT. 7V 132KW (180CV) PK04",
		    "consumption": 6,
		    "emissions": 136
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 1.8 TFSI MAN. 6V 132KW (180CV) PK02",
		    "consumption": 5.9,
		    "emissions": 138
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 1.8 TFSI MAN. 6V 132KW (180CV) PK03",
		    "consumption": 6,
		    "emissions": 140
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 1.8 TFSI MAN. 6V 132KW (180CV) PK04",
		    "consumption": 6.1,
		    "emissions": 142
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TDI MAN. 6V 135KW (184CV) PK02",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TDI MAN. 6V 135KW (184CV) PK02",
		    "consumption": 4.7,
		    "emissions": 126
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TDI MAN. 6V 135KW (184CV) PK03",
		    "consumption": 4.5,
		    "emissions": 119
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TDI MAN. 6V 135KW (184CV) PK03",
		    "consumption": 4.7,
		    "emissions": 127
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TDI MAN. 6V 135KW (184CV) PK04",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TDI MAN. 6V 135KW (184CV) PK04",
		    "consumption": 4.8,
		    "emissions": 129
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI AUT. 6V 169KW (230CV) PK02",
		    "consumption": 6.5,
		    "emissions": 151
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI AUT. 6V 169KW (230CV) PK03",
		    "consumption": 6.6,
		    "emissions": 153
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI AUT. 6V 169KW (230CV) PK04",
		    "consumption": 6.7,
		    "emissions": 155
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI AUT. 6V 169KW (230CV) QUATTRO PK02",
		    "consumption": 6.7,
		    "emissions": 154
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI AUT. 6V 169KW (230CV) QUATTRO PK03",
		    "consumption": 6.8,
		    "emissions": 156
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI AUT. 6V 169KW (230CV) QUATTRO PK04",
		    "consumption": 6.9,
		    "emissions": 158
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI MAN. 6V 169KW (230CV) PK02",
		    "consumption": 6,
		    "emissions": 140
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI MAN. 6V 169KW (230CV) PK03",
		    "consumption": 6.1,
		    "emissions": 142
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI MAN. 6V 169KW (230CV) PK04",
		    "consumption": 6.2,
		    "emissions": 144
		  },
		  {
		    "model": "Audi TTS COUPÉ MY18 2.0 TFSI AUT. 6V 228KW (310CV) QUATTRO PK05",
		    "consumption": 6.7,
		    "emissions": 155
		  },
		  {
		    "model": "Audi TTS COUPÉ MY18 2.0 TFSI AUT. 6V 228KW (310CV) QUATTRO PK06",
		    "consumption": 6.9,
		    "emissions": 159
		  },
		  {
		    "model": "Audi TTS COUPÉ MY18 2.0 TFSI MAN. 6V 228KW (310CV) QUATTRO PK05",
		    "consumption": 7.1,
		    "emissions": 164
		  },
		  {
		    "model": "Audi TTS COUPÉ MY18 2.0 TFSI MAN. 6V 228KW (310CV) QUATTRO PK06",
		    "consumption": 7.3,
		    "emissions": 168
		  },
		  {
		    "model": "Audi TTS ROADSTER MY18 2.0 TFSI AUT. 6V 228KW (310CV) QUATTRO PK05",
		    "consumption": 6.9,
		    "emissions": 159
		  },
		  {
		    "model": "Audi TTS ROADSTER MY18 2.0 TFSI AUT. 6V 228KW (310CV) QUATTRO PK06",
		    "consumption": 7.1,
		    "emissions": 163
		  },
		  {
		    "model": "Audi TTS ROADSTER MY18 2.0 TFSI MAN. 6V 228KW (310CV) QUATTRO PK05",
		    "consumption": 7.3,
		    "emissions": 169
		  },
		  {
		    "model": "Audi TTS ROADSTER MY18 2.0 TFSI MAN. 6V 228KW (310CV) QUATTRO PK06",
		    "consumption": 7.5,
		    "emissions": 173
		  }
		];
	var ele = document.getElementById('sel');
	for (var i = 0; i < audi.length; i++) {
            ele.innerHTML = ele.innerHTML +
                '<option value="' + i + '">' + audi[i].model + '</option>';
            }
        }


 function show(ele) {
 		var audi = [
		  {
		    "model": "Audi A1 MY18 1.0 TSI AUT. 7V 70KW (95CV) PK01",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI AUT. 7V 70KW (95CV) PK02",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI AUT. 7V 70KW (95CV) PK04",
		    "consumption": 4.5,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI AUT. 7V 70KW (95CV) PK07",
		    "consumption": 4.6,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI AUT. 7V 70KW (95CV) PK10",
		    "consumption": 4.6,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI MAN. 5V 70KW (95CV) PK01",
		    "consumption": 4.2,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI MAN. 5V 70KW (95CV) PK02",
		    "consumption": 4.2,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI MAN. 5V 70KW (95CV) PK04",
		    "consumption": 4.3,
		    "emissions": 98
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI MAN. 5V 70KW (95CV) PK07",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 MY18 1.0 TSI MAN. 5V 70KW (95CV) PK10",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI AUT. 7V 66KW (90CV) PK01",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI AUT. 7V 66KW (90CV) PK02",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI AUT. 7V 66KW (90CV) PK04",
		    "consumption": 3.9,
		    "emissions": 101
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI AUT. 7V 66KW (90CV) PK07",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI AUT. 7V 66KW (90CV) PK10",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI MAN. 5V 66KW (90CV) PK01",
		    "consumption": 3.6,
		    "emissions": 94
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI MAN. 5V 66KW (90CV) PK02",
		    "consumption": 3.6,
		    "emissions": 94
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI MAN. 5V 66KW (90CV) PK04",
		    "consumption": 3.6,
		    "emissions": 95
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI MAN. 5V 66KW (90CV) PK07",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TDI MAN. 5V 66KW (90CV) PK10",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 110KW (150CV) PK02",
		    "consumption": 4.7,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4.8,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 110KW (150CV) PK07",
		    "consumption": 5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 110KW (150CV) PK10",
		    "consumption": 5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 92KW (125CV) PK01",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 92KW (125CV) PK02",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 92KW (125CV) PK04",
		    "consumption": 5,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 92KW (125CV) PK07",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI AUT. 7V 92KW (125CV) PK10",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 110KW (150CV) PK02",
		    "consumption": 4.7,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 4.8,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 110KW (150CV) PK10",
		    "consumption": 5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK01",
		    "consumption": 4.9,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK02",
		    "consumption": 4.9,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK04",
		    "consumption": 5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK07",
		    "consumption": 5.1,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A1 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK10",
		    "consumption": 5.1,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK01",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK02",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK04",
		    "consumption": 3.9,
		    "emissions": 101
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK07",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK10",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI MAN. 5V 85KW (116CV) PK01",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI MAN. 5V 85KW (116CV) PK02",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI MAN. 5V 85KW (116CV) PK04",
		    "consumption": 3.7,
		    "emissions": 98
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI MAN. 5V 85KW (116CV) PK07",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 MY18 1.6 TDI MAN. 5V 85KW (116CV) PK10",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK03",
		    "consumption": 5.6,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A1 MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK05",
		    "consumption": 5.6,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A1 MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK08",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A1 MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK10",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI AUT. 7V 70KW (95CV) PK01",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI AUT. 7V 70KW (95CV) PK02",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI AUT. 7V 70KW (95CV) PK04",
		    "consumption": 4.5,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI AUT. 7V 70KW (95CV) PK07",
		    "consumption": 4.6,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI AUT. 7V 70KW (95CV) PK10",
		    "consumption": 4.6,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI MAN. 5V 70KW (95CV) PK01",
		    "consumption": 4.2,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI MAN. 5V 70KW (95CV) PK02",
		    "consumption": 4.2,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI MAN. 5V 70KW (95CV) PK04",
		    "consumption": 4.3,
		    "emissions": 98
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI MAN. 5V 70KW (95CV) PK07",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.0 TSI MAN. 5V 70KW (95CV) PK10",
		    "consumption": 4.4,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI AUT. 7V 66KW (90CV) PK01",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI AUT. 7V 66KW (90CV) PK02",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI AUT. 7V 66KW (90CV) PK04",
		    "consumption": 3.9,
		    "emissions": 101
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI AUT. 7V 66KW (90CV) PK07",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI AUT. 7V 66KW (90CV) PK10",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI MAN. 5V 66KW (90CV) PK01",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI MAN. 5V 66KW (90CV) PK02",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI MAN. 5V 66KW (90CV) PK04",
		    "consumption": 3.7,
		    "emissions": 98
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI MAN. 5V 66KW (90CV) PK07",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TDI MAN. 5V 66KW (90CV) PK10",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK02",
		    "consumption": 4.7,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4.8,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK07",
		    "consumption": 5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK10",
		    "consumption": 5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 92KW (125CV) PK01",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 92KW (125CV) PK02",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 92KW (125CV) PK04",
		    "consumption": 5,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 92KW (125CV) PK07",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI AUT. 7V 92KW (125CV) PK10",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 110KW (150CV) PK02",
		    "consumption": 4.7,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 4.8,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 110KW (150CV) PK10",
		    "consumption": 5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 92KW (125CV) PK01",
		    "consumption": 5.1,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 92KW (125CV) PK04",
		    "consumption": 5.1,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 92KW (125CV) PK07",
		    "consumption": 5.2,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.4 TSI MAN. 6V 92KW (125CV) PK10",
		    "consumption": 5.2,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI AUT. 7V 85KW (116CV) PK01",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI AUT. 7V 85KW (116CV) PK02",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI AUT. 7V 85KW (116CV) PK04",
		    "consumption": 3.9,
		    "emissions": 101
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI AUT. 7V 85KW (116CV) PK07",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI AUT. 7V 85KW (116CV) PK10",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI MAN. 5V 85KW (116CV) PK01",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI MAN. 5V 85KW (116CV) PK02",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI MAN. 5V 85KW (116CV) PK04",
		    "consumption": 3.7,
		    "emissions": 98
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI MAN. 5V 85KW (116CV) PK07",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.6 TDI MAN. 5V 85KW (116CV) PK10",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK03",
		    "consumption": 5.6,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK05",
		    "consumption": 5.6,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK08",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A1 SPORTBACK MY18 1.8 TFSI AUT. 7V 141KW (192CV) PK10",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI AUT. 7V 85KW (116CV) PK40",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI AUT. 7V 85KW (116CV) PK41",
		    "consumption": 5.2,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI AUT. 7V 85KW (116CV) PK42",
		    "consumption": 5.3,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI AUT. 7V 85KW (116CV) PK43",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI MAN. 6V 85KW (116CV) PK40",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI MAN. 6V 85KW (116CV) PK41",
		    "consumption": 5.4,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI MAN. 6V 85KW (116CV) PK42",
		    "consumption": 5.5,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.4 TSI MAN. 6V 85KW (116CV) PK43",
		    "consumption": 5.5,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI AUT. 7V 110KW (150CV) PK40",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI AUT. 7V 110KW (150CV) PK41",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI AUT. 7V 110KW (150CV) PK42",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI AUT. 7V 110KW (150CV) PK43",
		    "consumption": 5.2,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI AUT. 7V 110KW (150CV) PK44",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI AUT. 7V 110KW (150CV) PK45",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI MAN. 6V 110KW (150CV) PK40",
		    "consumption": 5.2,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI MAN. 6V 110KW (150CV) PK41",
		    "consumption": 5.3,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI MAN. 6V 110KW (150CV) PK42",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI MAN. 6V 110KW (150CV) PK43",
		    "consumption": 5.3,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI MAN. 6V 110KW (150CV) PK44",
		    "consumption": 5.4,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 1.5 TSI MAN. 6V 110KW (150CV) PK45",
		    "consumption": 5.4,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 110KW (150CV) PK40",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 110KW (150CV) PK41",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 110KW (150CV) PK42",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 110KW (150CV) PK43",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 110KW (150CV) PK44",
		    "consumption": 4.7,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 110KW (150CV) PK45",
		    "consumption": 4.7,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK40",
		    "consumption": 5,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK41",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK42",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK43",
		    "consumption": 5.2,
		    "emissions": 135
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK44",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK45",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) PK40",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) PK41",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) PK42",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) PK43",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) PK44",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) PK45",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK40",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK41",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK42",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK43",
		    "consumption": 4.9,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK44",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK45",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK40",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK41",
		    "consumption": 6,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK42",
		    "consumption": 6.1,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK43",
		    "consumption": 6.2,
		    "emissions": 141
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK44",
		    "consumption": 6.3,
		    "emissions": 143
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK45",
		    "consumption": 6.3,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK40",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK40",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK41",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK41",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK42",
		    "consumption": 5.7,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK42",
		    "consumption": 5.8,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK43",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK43",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK44",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK44",
		    "consumption": 6,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK45",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK45",
		    "consumption": 6,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.0 TSI AUT. 7V 85KW (115CV) PK43",
		    "consumption": 4.6,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.0 TSI MAN. 6V 85KW (115CV) PK43",
		    "consumption": 4.6,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI AUT. 7V 110KW (150CV) PK40",
		    "consumption": 4.8,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI AUT. 7V 110KW (150CV) PK41",
		    "consumption": 4.9,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI AUT. 7V 110KW (150CV) PK42",
		    "consumption": 5,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI AUT. 7V 110KW (150CV) PK43",
		    "consumption": 5,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI AUT. 7V 110KW (150CV) PK44",
		    "consumption": 5.1,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI AUT. 7V 110KW (150CV) PK45",
		    "consumption": 5.1,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI MAN. 6V 110KW (150CV) PK40",
		    "consumption": 5,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI MAN. 6V 110KW (150CV) PK41",
		    "consumption": 5,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI MAN. 6V 110KW (150CV) PK42",
		    "consumption": 5.1,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI MAN. 6V 110KW (150CV) PK43",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI MAN. 6V 110KW (150CV) PK44",
		    "consumption": 5.2,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.5 TSI MAN. 6V 110KW (150CV) PK45",
		    "consumption": 5.2,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI AUT. 7V 85KW (116CV) PK40",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI AUT. 7V 85KW (116CV) PK41",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI AUT. 7V 85KW (116CV) PK42",
		    "consumption": 4,
		    "emissions": 105
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI AUT. 7V 85KW (116CV) PK43",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI MAN. 6V 85KW (116CV) PK40",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI MAN. 6V 85KW (116CV) PK41",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI MAN. 6V 85KW (116CV) PK42",
		    "consumption": 4.1,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 1.6 TDI MAN. 6V 85KW (116CV) PK43",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK40",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK41",
		    "consumption": 4.4,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK42",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK43",
		    "consumption": 4.5,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK44",
		    "consumption": 4.6,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK45",
		    "consumption": 4.6,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK40",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK41",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK42",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK43",
		    "consumption": 5,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK44",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK45",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK40",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK41",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK42",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK43",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK44",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK45",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK40",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK41",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK42",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK43",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK44",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK45",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK40",
		    "consumption": 5.6,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK41",
		    "consumption": 5.7,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK42",
		    "consumption": 5.7,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK43",
		    "consumption": 5.8,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK44",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK45",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK40",
		    "consumption": 5.5,
		    "emissions": 125
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK41",
		    "consumption": 5.6,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK42",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK43",
		    "consumption": 5.7,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK44",
		    "consumption": 5.8,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A3 LIMOUSINE MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK45",
		    "consumption": 5.8,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI AUT. 7V 85KW (115CV) PK31",
		    "consumption": 4.5,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI AUT. 7V 85KW (115CV) PK32",
		    "consumption": 4.6,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI AUT. 7V 85KW (115CV) PK33",
		    "consumption": 4.7,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI AUT. 7V 85KW (115CV) PK34",
		    "consumption": 4.7,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI MAN. 6V 85KW (115CV) PK31",
		    "consumption": 4.5,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI MAN. 6V 85KW (115CV) PK32",
		    "consumption": 4.6,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI MAN. 6V 85KW (115CV) PK33",
		    "consumption": 4.7,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 MY18 1.0 TSI MAN. 6V 85KW (115CV) PK34",
		    "consumption": 4.7,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI AUT. 7V 110KW (150CV) PK31",
		    "consumption": 4.7,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI AUT. 7V 110KW (150CV) PK32",
		    "consumption": 4.8,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 4.9,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI MAN. 6V 110KW (150CV) PK31",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI MAN. 6V 110KW (150CV) PK32",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI MAN. 6V 110KW (150CV) PK33",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI MAN. 6V 110KW (150CV) PK34",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI MAN. 6V 110KW (150CV) PK35",
		    "consumption": 5.2,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 MY18 1.5 TSI MAN. 6V 110KW (150CV) PK36",
		    "consumption": 5.2,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK31",
		    "consumption": 3.9,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK31",
		    "consumption": 3.9,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK32",
		    "consumption": 4,
		    "emissions": 105
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK32",
		    "consumption": 4,
		    "emissions": 105
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK33",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK33",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK34",
		    "consumption": 4,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI AUT. 7V 85KW (116CV) PK34",
		    "consumption": 4,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK31",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK32",
		    "consumption": 4.1,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK33",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK34",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK35",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK40",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 MY18 1.6 TDI MAN. 6V 85KW (116CV) PK43",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK31",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK32",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 4.4,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK31",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK32",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK33",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK34",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK35",
		    "consumption": 5,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK36",
		    "consumption": 5,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK31",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK32",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK33",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK34",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK35",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK36",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK31",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK32",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK33",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK34",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK31",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK32",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK33",
		    "consumption": 5.8,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK34",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK36",
		    "consumption": 6,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK31",
		    "consumption": 5.5,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK32",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 5.6,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK36",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 SPORTBACK E-TRON MY18 1.4 TSI AUT. 6V 110KW (150CV) PK21",
		    "consumption": 1.6,
		    "emissions": 36
		  },
		  {
		    "model": "Audi A3 SPORTBACK E-TRON MY18 1.4 TSI AUT. 6V 110KW (150CV) PK22",
		    "consumption": 1.7,
		    "emissions": 38
		  },
		  {
		    "model": "Audi A3 SPORTBACK E-TRON MY18 1.4 TSI AUT. 6V 110KW (150CV) PK23",
		    "consumption": 1.8,
		    "emissions": 40
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI AUT. 7V 81KW (110CV) PK31",
		    "consumption": 5,
		    "emissions": 89
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI AUT. 7V 81KW (110CV) PK32",
		    "consumption": 5.1,
		    "emissions": 91
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI AUT. 7V 81KW (110CV) PK33",
		    "consumption": 5.2,
		    "emissions": 92
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI AUT. 7V 81KW (110CV) PK34",
		    "consumption": 5.2,
		    "emissions": 93
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI MAN. 6V 81KW (110CV) PK31",
		    "consumption": 5.2,
		    "emissions": 92
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI MAN. 6V 81KW (110CV) PK32",
		    "consumption": 5.3,
		    "emissions": 94
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI MAN. 6V 81KW (110CV) PK33",
		    "consumption": 5.3,
		    "emissions": 95
		  },
		  {
		    "model": "Audi A3 SPORTBACK G-TRON MY18 1.4 TGI MAN. 6V 81KW (110CV) PK34",
		    "consumption": 5.4,
		    "emissions": 96
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI AUT. 7V 85KW (115CV) PK31",
		    "consumption": 4.5,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI AUT. 7V 85KW (115CV) PK32",
		    "consumption": 4.6,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI AUT. 7V 85KW (115CV) PK33",
		    "consumption": 4.7,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI AUT. 7V 85KW (115CV) PK34",
		    "consumption": 4.7,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI MAN. 6V 85KW (115CV) PK31",
		    "consumption": 4.5,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI MAN. 6V 85KW (115CV) PK32",
		    "consumption": 4.6,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI MAN. 6V 85KW (115CV) PK33",
		    "consumption": 4.7,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.0 TSI MAN. 6V 85KW (115CV) PK34",
		    "consumption": 4.7,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI AUT. 7V 110KW (150CV) PK31",
		    "consumption": 4.8,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI AUT. 7V 110KW (150CV) PK32",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 5,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI MAN. 6V 110KW (150CV) PK31",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI MAN. 6V 110KW (150CV) PK32",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI MAN. 6V 110KW (150CV) PK33",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI MAN. 6V 110KW (150CV) PK34",
		    "consumption": 5.2,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI MAN. 6V 110KW (150CV) PK35",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.5 TSI MAN. 6V 110KW (150CV) PK36",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.6 TDI MAN. 6V 85KW (116CV) PK31",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.6 TDI MAN. 6V 85KW (116CV) PK32",
		    "consumption": 4.1,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.6 TDI MAN. 6V 85KW (116CV) PK33",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 1.6 TDI MAN. 6V 85KW (116CV) PK34",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK31",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK32",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK31",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK32",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK33",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK34",
		    "consumption": 5,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK35",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI AUT. 7V 135KW (184CV) QUATTRO PK36",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK31",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK32",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK33",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK34",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK35",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK36",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK31",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK32",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK33",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK34",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK35",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK36",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK31",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK32",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK33",
		    "consumption": 5.8,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK34",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK35",
		    "consumption": 6,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) QUATTRO PK36",
		    "consumption": 6,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK31",
		    "consumption": 5.5,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK32",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 5.6,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A3 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK36",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI AUT. 7V 120KW (163CV) PK39",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI AUT. 7V 120KW (163CV) PK40",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI AUT. 7V 120KW (163CV) PK41",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI AUT. 7V 140KW (190CV) PK39",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI AUT. 7V 140KW (190CV) PK40",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI AUT. 7V 140KW (190CV) PK41",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI MAN. 6V 110KW (150CV) PK39",
		    "consumption": 4.9,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI MAN. 6V 110KW (150CV) PK40",
		    "consumption": 5.1,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TDI MAN. 6V 110KW (150CV) PK41",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK39",
		    "consumption": 6.5,
		    "emissions": 148
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK40",
		    "consumption": 6.8,
		    "emissions": 153
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK41",
		    "consumption": 6.8,
		    "emissions": 154
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 3.0 TDI AUT. 7V 160KW (218CV) PK39",
		    "consumption": 5.1,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 3.0 TDI AUT. 7V 160KW (218CV) PK40",
		    "consumption": 5.2,
		    "emissions": 141
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 3.0 TDI AUT. 7V 160KW (218CV) PK41",
		    "consumption": 5.3,
		    "emissions": 143
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 3.0 TDI AUT. 8V 200KW (272CV) PK39",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 3.0 TDI AUT. 8V 200KW (272CV) PK40",
		    "consumption": 5.4,
		    "emissions": 143
		  },
		  {
		    "model": "Audi A4 ALLROAD QUATTRO MY18 3.0 TDI AUT. 8V 200KW (272CV) PK41",
		    "consumption": 5.5,
		    "emissions": 146
		  },
		  {
		    "model": "Audi A4 AVANT G-TRON MY18 2.0 TFSI AUT. 7V 125KW (170CV) PK05",
		    "consumption": 6.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A4 AVANT G-TRON MY18 2.0 TFSI AUT. 7V 125KW (170CV) PK06",
		    "consumption": 6.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A4 AVANT G-TRON MY18 2.0 TFSI AUT. 7V 125KW (170CV) PK07",
		    "consumption": 6.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A4 AVANT G-TRON MY18 2.0 TFSI AUT. 7V 125KW (170CV) PK08",
		    "consumption": 6.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A4 AVANT MY18 1.4 TSI MAN. 6V 110KW (150CV) PK02",
		    "consumption": 5.4,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A4 AVANT MY18 1.4 TSI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 5.5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A4 AVANT MY18 1.4 TSI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 5.5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A4 AVANT MY18 1.4 TSI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 5.6,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A4 AVANT MY18 1.4 TSI MAN. 6V 110KW (150CV) PK08",
		    "consumption": 5.8,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK01",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK02",
		    "consumption": 4.1,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK05",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK06",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK07",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK08",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK10",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK11",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK12",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK13",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK10",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK11",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK12",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK13",
		    "consumption": 4.7,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK02",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 4.1,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 4.1,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK08",
		    "consumption": 4.3,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK31",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK02",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK05",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK06",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK07",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK08",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK10",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK11",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK12",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK13",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK01",
		    "consumption": 3.9,
		    "emissions": 102
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK02",
		    "consumption": 4,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK04",
		    "consumption": 4.1,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK05",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK06",
		    "consumption": 4.1,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK07",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TDI MAN. 6V 90KW (122CV) PK08",
		    "consumption": 4.3,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK01",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK02",
		    "consumption": 5.2,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK04",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK05",
		    "consumption": 5.3,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK06",
		    "consumption": 5.3,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK07",
		    "consumption": 5.4,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK08",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK10",
		    "consumption": 6.5,
		    "emissions": 146
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK11",
		    "consumption": 6.5,
		    "emissions": 146
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK12",
		    "consumption": 6.6,
		    "emissions": 149
		  },
		  {
		    "model": "Audi A4 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK13",
		    "consumption": 6.6,
		    "emissions": 150
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK10",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK11",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK14",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK15",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK10",
		    "consumption": 4.7,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK11",
		    "consumption": 4.7,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK14",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK15",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK27",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK28",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK29",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A4 AVANT MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK30",
		    "consumption": 5.4,
		    "emissions": 142
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 1.4 TSI MAN. 6V 110KW (150CV) PK02",
		    "consumption": 5.2,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 1.4 TSI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 5.3,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 1.4 TSI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 5.3,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 1.4 TSI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 5.4,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 1.4 TSI MAN. 6V 110KW (150CV) PK08",
		    "consumption": 5.5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK01",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK02",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 3.9,
		    "emissions": 101
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK05",
		    "consumption": 4.1,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK06",
		    "consumption": 4.1,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK07",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK08",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK10",
		    "consumption": 4.1,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK11",
		    "consumption": 4.1,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK12",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK13",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK10",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK11",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK12",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK13",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK01",
		    "consumption": 3.7,
		    "emissions": 95
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK02",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 3.8,
		    "emissions": 99
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 4,
		    "emissions": 104
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 4,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK08",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK31",
		    "consumption": 3.7,
		    "emissions": 95
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK02",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK05",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK06",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK07",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK08",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK10",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK11",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK12",
		    "consumption": 4.4,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK13",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK01",
		    "consumption": 3.7,
		    "emissions": 97
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK02",
		    "consumption": 3.8,
		    "emissions": 98
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK04",
		    "consumption": 3.9,
		    "emissions": 101
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK05",
		    "consumption": 4,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK06",
		    "consumption": 4,
		    "emissions": 103
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK07",
		    "consumption": 4,
		    "emissions": 105
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TDI MAN. 6V 90KW (122CV) PK08",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK01",
		    "consumption": 4.8,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK02",
		    "consumption": 5,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK04",
		    "consumption": 4.9,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK05",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK06",
		    "consumption": 5.1,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK07",
		    "consumption": 5.3,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK08",
		    "consumption": 5.4,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK10",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK11",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK14",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK15",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK10",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK11",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK14",
		    "consumption": 4.7,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK15",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK27",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK28",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK29",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A4 LIMOUSINE MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK30",
		    "consumption": 5.2,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) PK33",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) PK34",
		    "consumption": 4.6,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) PK35",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) PK36",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK33",
		    "consumption": 4.7,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK34",
		    "consumption": 4.9,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK35",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK36",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK33",
		    "consumption": 5.6,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK34",
		    "consumption": 5.8,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK35",
		    "consumption": 5.8,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK34",
		    "consumption": 6.5,
		    "emissions": 149
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK35",
		    "consumption": 6.6,
		    "emissions": 151
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK36",
		    "consumption": 6.7,
		    "emissions": 152
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 6,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 6.1,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK21",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK22",
		    "consumption": 5.2,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK23",
		    "consumption": 5.2,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A5 CABRIOLET MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK33",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 4.3,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) PK33",
		    "consumption": 4.1,
		    "emissions": 107
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) PK34",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) PK35",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) PK42",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK33",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK34",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK35",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 110KW (150CV) PK33",
		    "consumption": 4.1,
		    "emissions": 106
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 110KW (150CV) PK34",
		    "consumption": 4.2,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 110KW (150CV) PK35",
		    "consumption": 4.2,
		    "emissions": 108
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 110KW (150CV) PK36",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 4.4,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TDI MAN. 6V 140KW (190CV) PK42",
		    "consumption": 4.2,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK33",
		    "consumption": 5.1,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK34",
		    "consumption": 5.3,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK35",
		    "consumption": 5.4,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK36",
		    "consumption": 5.4,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK34",
		    "consumption": 6.2,
		    "emissions": 141
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK35",
		    "consumption": 6.3,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK36",
		    "consumption": 6.3,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 5.6,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK36",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK18",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK19",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK33",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK37",
		    "consumption": 4.7,
		    "emissions": 123
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK18",
		    "consumption": 5.2,
		    "emissions": 135
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK19",
		    "consumption": 5.2,
		    "emissions": 135
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK33",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A5 COUPÉ MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK37",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 5.4,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 5.6,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 1.4 TSI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 5.6,
		    "emissions": 130
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK33",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK34",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK35",
		    "consumption": 4.3,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 110KW (150CV) PK36",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) PK33",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) PK34",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) PK35",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) PK42",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) PK48",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK33",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK34",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK35",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK36",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK33",
		    "consumption": 4.2,
		    "emissions": 109
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK34",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK35",
		    "consumption": 4.3,
		    "emissions": 111
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) PK36",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK34",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) PK42",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) PK48",
		    "consumption": 4.3,
		    "emissions": 112
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) QUATTRO PK33",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) QUATTRO PK34",
		    "consumption": 4.8,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) QUATTRO PK35",
		    "consumption": 4.8,
		    "emissions": 125
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TDI MAN. 6V 140KW (190CV) QUATTRO PK36",
		    "consumption": 4.8,
		    "emissions": 125
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK33",
		    "consumption": 5.4,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK34",
		    "consumption": 5.5,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 140KW (190CV) PK35",
		    "consumption": 5.5,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK33",
		    "consumption": 6.4,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK34",
		    "consumption": 6.5,
		    "emissions": 147
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK35",
		    "consumption": 6.5,
		    "emissions": 148
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK36",
		    "consumption": 6.5,
		    "emissions": 148
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK33",
		    "consumption": 5.7,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK34",
		    "consumption": 5.8,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 2.0 TFSI MAN. 6V 140KW (190CV) PK35",
		    "consumption": 5.9,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK18",
		    "consumption": 4.8,
		    "emissions": 125
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK33",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK37",
		    "consumption": 4.8,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK18",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK19",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK20",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TDI AUT. 8V 200KW (272CV) QUATTRO PK37",
		    "consumption": 5.2,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK24",
		    "consumption": 7.3,
		    "emissions": 166
		  },
		  {
		    "model": "Audi A5 SPORTBACK MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK25",
		    "consumption": 7.5,
		    "emissions": 170
		  },
		  {
		    "model": "Audi A6 ALLROAD QUATTRO MY18 3.0 TDI AUT. 7V 160KW (218CV) PK07",
		    "consumption": 5.5,
		    "emissions": 145
		  },
		  {
		    "model": "Audi A6 ALLROAD QUATTRO MY18 3.0 TDI AUT. 7V 160KW (218CV) PK07",
		    "consumption": 5.7,
		    "emissions": 149
		  },
		  {
		    "model": "Audi A6 ALLROAD QUATTRO MY18 3.0 TDI AUT. 7V 200KW (272CV) PK07",
		    "consumption": 5.6,
		    "emissions": 149
		  },
		  {
		    "model": "Audi A6 ALLROAD QUATTRO MY18 3.0 TDI AUT. 8V 235KW (320CV) PK07",
		    "consumption": 6.5,
		    "emissions": 172
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK01",
		    "consumption": 5.9,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK03",
		    "consumption": 5.9,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK04",
		    "consumption": 5.9,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK06",
		    "consumption": 6,
		    "emissions": 142
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK01",
		    "consumption": 6.2,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK03",
		    "consumption": 6.2,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK04",
		    "consumption": 6.2,
		    "emissions": 146
		  },
		  {
		    "model": "Audi A6 AVANT MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK06",
		    "consumption": 6.4,
		    "emissions": 149
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK01",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK03",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK01",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK03",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK04",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) PK06",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK01",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK03",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK04",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK13",
		    "consumption": 5.2,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK01",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK03",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK01",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK03",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK04",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TDI MAN. 6V 140KW (190CV) PK06",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK03",
		    "consumption": 6,
		    "emissions": 140
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK04",
		    "consumption": 6.1,
		    "emissions": 143
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK06",
		    "consumption": 6.2,
		    "emissions": 146
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK03",
		    "consumption": 6.9,
		    "emissions": 158
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK04",
		    "consumption": 7,
		    "emissions": 159
		  },
		  {
		    "model": "Audi A6 AVANT MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK13",
		    "consumption": 7.1,
		    "emissions": 163
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK02",
		    "consumption": 4.5,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK02",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK03",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK03",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK04",
		    "consumption": 4.5,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK04",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK06",
		    "consumption": 4.6,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) PK06",
		    "consumption": 4.8,
		    "emissions": 124
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK03",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK03",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK04",
		    "consumption": 5.2,
		    "emissions": 136
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK04",
		    "consumption": 5.3,
		    "emissions": 140
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK13",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK13",
		    "consumption": 5.4,
		    "emissions": 143
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK03",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK04",
		    "consumption": 5.3,
		    "emissions": 140
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK13",
		    "consumption": 5.4,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK03",
		    "consumption": 6.2,
		    "emissions": 164
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK04",
		    "consumption": 6.3,
		    "emissions": 166
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK13",
		    "consumption": 6.4,
		    "emissions": 169
		  },
		  {
		    "model": "Audi A6 AVANT MY18 3.0 TDI AUT. 8V 240KW (326CV) QUATTRO PK13",
		    "consumption": 6.4,
		    "emissions": 169
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK01",
		    "consumption": 5.7,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK03",
		    "consumption": 5.7,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK04",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI AUT. 7V 140KW (190CV) PK06",
		    "consumption": 5.9,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK01",
		    "consumption": 5.9,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK03",
		    "consumption": 5.9,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK04",
		    "consumption": 6,
		    "emissions": 140
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 1.8 TFSI MAN. 6V 140KW (190CV) PK06",
		    "consumption": 6.1,
		    "emissions": 143
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK01",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK03",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 110KW (150CV) PK06",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK01",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK03",
		    "consumption": 4.2,
		    "emissions": 110
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK04",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) PK06",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK02",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK03",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK04",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK06",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK13",
		    "consumption": 5,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK01",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK03",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 4.5,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK01",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK03",
		    "consumption": 4.4,
		    "emissions": 114
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK04",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TDI MAN. 6V 140KW (190CV) PK06",
		    "consumption": 4.5,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK03",
		    "consumption": 5.9,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK06",
		    "consumption": 6.1,
		    "emissions": 142
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK02",
		    "consumption": 6.7,
		    "emissions": 153
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK03",
		    "consumption": 6.7,
		    "emissions": 153
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK04",
		    "consumption": 6.8,
		    "emissions": 154
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK13",
		    "consumption": 6.9,
		    "emissions": 158
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK02",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK02",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK03",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK04",
		    "consumption": 4.4,
		    "emissions": 116
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK04",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK06",
		    "consumption": 4.5,
		    "emissions": 119
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) PK06",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK02",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK02",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK03",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK04",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK04",
		    "consumption": 5.1,
		    "emissions": 135
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK13",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK13",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK03",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK04",
		    "consumption": 5.1,
		    "emissions": 135
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK13",
		    "consumption": 5.2,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK03",
		    "consumption": 6,
		    "emissions": 159
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK04",
		    "consumption": 6.1,
		    "emissions": 161
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK13",
		    "consumption": 6.2,
		    "emissions": 164
		  },
		  {
		    "model": "Audi A6 LIMOUSINE MY18 3.0 TDI AUT. 8V 240KW (326CV) QUATTRO PK13",
		    "consumption": 6.2,
		    "emissions": 164
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK09",
		    "consumption": 6,
		    "emissions": 139
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK11",
		    "consumption": 6.1,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) PK12",
		    "consumption": 6.1,
		    "emissions": 144
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK09",
		    "consumption": 6.9,
		    "emissions": 157
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK11",
		    "consumption": 7.1,
		    "emissions": 161
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK12",
		    "consumption": 7.1,
		    "emissions": 161
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) PK09",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) PK09",
		    "consumption": 4.7,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) PK11",
		    "consumption": 4.6,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) PK11",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) PK12",
		    "consumption": 4.6,
		    "emissions": 122
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) PK12",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK09",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK09",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK11",
		    "consumption": 5.3,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK11",
		    "consumption": 5.4,
		    "emissions": 141
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK12",
		    "consumption": 5.3,
		    "emissions": 137
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 160KW (218CV) QUATTRO PK12",
		    "consumption": 5.4,
		    "emissions": 141
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK09",
		    "consumption": 5.2,
		    "emissions": 138
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK11",
		    "consumption": 5.4,
		    "emissions": 142
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 7V 200KW (272CV) QUATTRO PK12",
		    "consumption": 5.4,
		    "emissions": 142
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK09",
		    "consumption": 6.2,
		    "emissions": 164
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK11",
		    "consumption": 6.3,
		    "emissions": 167
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 8V 235KW (320CV) QUATTRO PK12",
		    "consumption": 6.3,
		    "emissions": 167
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 8V 240KW (326CV) QUATTRO PK11",
		    "consumption": 6.3,
		    "emissions": 167
		  },
		  {
		    "model": "Audi A7 SPORTBACK MY18 3.0 TDI AUT. 8V 240KW (326CV) QUATTRO PK12",
		    "consumption": 6.3,
		    "emissions": 167
		  },
		  {
		    "model": "Audi A8 L MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK01",
		    "consumption": 5.9,
		    "emissions": 155
		  },
		  {
		    "model": "Audi A8 L MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK03",
		    "consumption": 6,
		    "emissions": 159
		  },
		  {
		    "model": "Audi A8 L MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK05",
		    "consumption": 6,
		    "emissions": 159
		  },
		  {
		    "model": "Audi A8 L MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK06",
		    "consumption": 6.1,
		    "emissions": 161
		  },
		  {
		    "model": "Audi A8 L MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK08",
		    "consumption": 6.1,
		    "emissions": 161
		  },
		  {
		    "model": "Audi A8 L MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK10",
		    "consumption": 5.8,
		    "emissions": 153
		  },
		  {
		    "model": "Audi A8 L MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK02",
		    "consumption": 9,
		    "emissions": 207
		  },
		  {
		    "model": "Audi A8 L MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK04",
		    "consumption": 9.2,
		    "emissions": 211
		  },
		  {
		    "model": "Audi A8 L MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK05",
		    "consumption": 9.2,
		    "emissions": 211
		  },
		  {
		    "model": "Audi A8 L MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK08",
		    "consumption": 9.3,
		    "emissions": 215
		  },
		  {
		    "model": "Audi A8 L MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK02",
		    "consumption": 7.3,
		    "emissions": 190
		  },
		  {
		    "model": "Audi A8 L MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK04",
		    "consumption": 7.4,
		    "emissions": 194
		  },
		  {
		    "model": "Audi A8 L MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK05",
		    "consumption": 7.4,
		    "emissions": 194
		  },
		  {
		    "model": "Audi A8 L MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK08",
		    "consumption": 7.5,
		    "emissions": 197
		  },
		  {
		    "model": "Audi A8 L MY18 6.3 FSI AUT. 8V 368KW (500CV) QUATTRO PK05",
		    "consumption": 11,
		    "emissions": 254
		  },
		  {
		    "model": "Audi A8 L MY18 6.3 FSI AUT. 8V 368KW (500CV) QUATTRO PK08",
		    "consumption": 11.2,
		    "emissions": 259
		  },
		  {
		    "model": "Audi A8 MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK01",
		    "consumption": 5.8,
		    "emissions": 151
		  },
		  {
		    "model": "Audi A8 MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK03",
		    "consumption": 5.9,
		    "emissions": 155
		  },
		  {
		    "model": "Audi A8 MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK05",
		    "consumption": 5.9,
		    "emissions": 155
		  },
		  {
		    "model": "Audi A8 MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK06",
		    "consumption": 6,
		    "emissions": 157
		  },
		  {
		    "model": "Audi A8 MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK08",
		    "consumption": 6,
		    "emissions": 157
		  },
		  {
		    "model": "Audi A8 MY18 3.0 TDI AUT. 8V 193KW (262CV) QUATTRO PK10",
		    "consumption": 5.7,
		    "emissions": 149
		  },
		  {
		    "model": "Audi A8 MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK02",
		    "consumption": 8.9,
		    "emissions": 206
		  },
		  {
		    "model": "Audi A8 MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK04",
		    "consumption": 9.1,
		    "emissions": 210
		  },
		  {
		    "model": "Audi A8 MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK05",
		    "consumption": 9.1,
		    "emissions": 210
		  },
		  {
		    "model": "Audi A8 MY18 4.0 FSI AUT. 8V 320KW (435CV) QUATTRO PK08",
		    "consumption": 9.3,
		    "emissions": 214
		  },
		  {
		    "model": "Audi A8 MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK02",
		    "consumption": 7.2,
		    "emissions": 189
		  },
		  {
		    "model": "Audi A8 MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK04",
		    "consumption": 7.4,
		    "emissions": 193
		  },
		  {
		    "model": "Audi A8 MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK05",
		    "consumption": 7.4,
		    "emissions": 193
		  },
		  {
		    "model": "Audi A8 MY18 4.2 TDI AUT. 8V 283KW (385CV) QUATTRO PK08",
		    "consumption": 7.5,
		    "emissions": 196
		  },
		  {
		    "model": "Audi Q2 1.4 TSI AUT. 7V 110KW (150CV) PK05",
		    "consumption": 5.4,
		    "emissions": 123
		  },
		  {
		    "model": "Audi Q2 1.4 TSI AUT. 7V 110KW (150CV) PK06",
		    "consumption": 5.5,
		    "emissions": 125
		  },
		  {
		    "model": "Audi Q2 1.4 TSI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q2 1.4 TSI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 5.7,
		    "emissions": 130
		  },
		  {
		    "model": "Audi Q2 1.6 TDI AUT. 7V 85KW (116CV) PK05",
		    "consumption": 4.3,
		    "emissions": 113
		  },
		  {
		    "model": "Audi Q2 1.6 TDI AUT. 7V 85KW (116CV) PK06",
		    "consumption": 4.3,
		    "emissions": 114
		  },
		  {
		    "model": "Audi Q2 1.6 TDI MAN. 6V 85KW (116CV) PK05",
		    "consumption": 4.6,
		    "emissions": 118
		  },
		  {
		    "model": "Audi Q2 1.6 TDI MAN. 6V 85KW (116CV) PK06",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi Q2 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK05",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi Q2 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK06",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi Q2 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK05",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q2 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK06",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI AUT. 6V 110KW (150CV) PK02",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI AUT. 6V 110KW (150CV) PK07",
		    "consumption": 6.2,
		    "emissions": 143
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI AUT. 6V 110KW (150CV) PK08",
		    "consumption": 6.2,
		    "emissions": 143
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 5.6,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK03",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK05",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK06",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK07",
		    "consumption": 6.1,
		    "emissions": 141
		  },
		  {
		    "model": "Audi Q3 MY18 1.4 TSI MAN. 6V 92KW (125CV) PK08",
		    "consumption": 6.1,
		    "emissions": 141
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK03",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK03",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4.7,
		    "emissions": 122
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK04",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK05",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK05",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK06",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK06",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK07",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK07",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK08",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) PK08",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK03",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK05",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK06",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK07",
		    "consumption": 5.3,
		    "emissions": 140
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 110KW (150CV) QUATTRO PK08",
		    "consumption": 5.3,
		    "emissions": 140
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK03",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK03",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK05",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK05",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK06",
		    "consumption": 4.9,
		    "emissions": 128
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK06",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK07",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK07",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK08",
		    "consumption": 5.1,
		    "emissions": 134
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI AUT. 7V 88KW (120CV) PK08",
		    "consumption": 5.3,
		    "emissions": 139
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK03",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK08",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK03",
		    "consumption": 5,
		    "emissions": 131
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK06",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK07",
		    "consumption": 5.2,
		    "emissions": 138
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 110KW (150CV) QUATTRO PK08",
		    "consumption": 5.2,
		    "emissions": 138
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 135KW (184CV) QUATTRO PK08",
		    "consumption": 5.6,
		    "emissions": 146
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 88KW (120CV) PK03",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 88KW (120CV) PK05",
		    "consumption": 4.6,
		    "emissions": 119
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 88KW (120CV) PK06",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 88KW (120CV) PK07",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TDI MAN. 6V 88KW (120CV) PK08",
		    "consumption": 4.8,
		    "emissions": 126
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TFSI AUT. 7V 132KW (180CV) QUATTRO PK06",
		    "consumption": 6.7,
		    "emissions": 155
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TFSI AUT. 7V 132KW (180CV) QUATTRO PK07",
		    "consumption": 7,
		    "emissions": 161
		  },
		  {
		    "model": "Audi Q3 MY18 2.0 TFSI AUT. 7V 132KW (180CV) QUATTRO PK08",
		    "consumption": 7,
		    "emissions": 161
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 120KW (163CV) QUATTRO PK03",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 120KW (163CV) QUATTRO PK04",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 120KW (163CV) QUATTRO PK05",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 120KW (163CV) QUATTRO PK06",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 120KW (163CV) QUATTRO PK07",
		    "consumption": 5.2,
		    "emissions": 136
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 120KW (163CV) QUATTRO PK09",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK03",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK04",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK05",
		    "consumption": 5,
		    "emissions": 132
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK06",
		    "consumption": 5.1,
		    "emissions": 133
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK07",
		    "consumption": 5.2,
		    "emissions": 136
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI AUT. 7V 140KW (190CV) QUATTRO PK09",
		    "consumption": 5.3,
		    "emissions": 138
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK03",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK04",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK05",
		    "consumption": 4.6,
		    "emissions": 120
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK06",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK07",
		    "consumption": 4.8,
		    "emissions": 127
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TDI MAN. 6V 110KW (150CV) PK09",
		    "consumption": 4.9,
		    "emissions": 129
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK03",
		    "consumption": 6.8,
		    "emissions": 154
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK04",
		    "consumption": 6.9,
		    "emissions": 157
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK05",
		    "consumption": 6.9,
		    "emissions": 157
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK06",
		    "consumption": 7,
		    "emissions": 159
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK07",
		    "consumption": 7.1,
		    "emissions": 162
		  },
		  {
		    "model": "Audi Q5 MY18 2.0 TFSI AUT. 7V 185KW (252CV) QUATTRO PK09",
		    "consumption": 7.2,
		    "emissions": 164
		  },
		  {
		    "model": "Audi Q7 E-TRON MY18 3.0 TDI AUT. 8V 190KW (258CV) 5PL QUATTRO PK03",
		    "consumption": 1.9,
		    "emissions": 50
		  },
		  {
		    "model": "Audi Q7 E-TRON MY18 3.0 TDI AUT. 8V 190KW (258CV) 5PL QUATTRO PK08",
		    "consumption": 1.8,
		    "emissions": 48
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 5PL QUATTRO PK01",
		    "consumption": 5.5,
		    "emissions": 144
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 5PL QUATTRO PK02",
		    "consumption": 5.6,
		    "emissions": 146
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 5PL QUATTRO PK05",
		    "consumption": 6,
		    "emissions": 157
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 5PL QUATTRO PK09",
		    "consumption": 6,
		    "emissions": 157
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 7PL QUATTRO PK01",
		    "consumption": 5.7,
		    "emissions": 148
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 7PL QUATTRO PK02",
		    "consumption": 5.8,
		    "emissions": 150
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 7PL QUATTRO PK05",
		    "consumption": 6.2,
		    "emissions": 161
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 160KW (218CV) 7PL QUATTRO PK09",
		    "consumption": 6.2,
		    "emissions": 161
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 200KW (272CV) 5PL QUATTRO PK02",
		    "consumption": 5.7,
		    "emissions": 149
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 200KW (272CV) 5PL QUATTRO PK05",
		    "consumption": 6.1,
		    "emissions": 159
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 200KW (272CV) 5PL QUATTRO PK09",
		    "consumption": 6.1,
		    "emissions": 159
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 200KW (272CV) 7PL QUATTRO PK02",
		    "consumption": 5.9,
		    "emissions": 153
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 200KW (272CV) 7PL QUATTRO PK05",
		    "consumption": 6.2,
		    "emissions": 163
		  },
		  {
		    "model": "Audi Q7 MY18 3.0 TDI AUT. 8V 200KW (272CV) 7PL QUATTRO PK09",
		    "consumption": 6.2,
		    "emissions": 163
		  },
		  {
		    "model": "Audi R8 COUPÉ MY17 5.2 FSI+SRE AUT. 7V 397KW (540CV) QUATTRO",
		    "consumption": 11.4,
		    "emissions": 272
		  },
		  {
		    "model": "Audi R8 COUPÉ MY17 5.2 FSI+SRE AUT. 7V 449KW (610CV) QUATTRO",
		    "consumption": 12.3,
		    "emissions": 287
		  },
		  {
		    "model": "Audi R8 SPYDER MY17 5.2 FSI+SRE AUT. 7V 397KW (540CV) QUATTRO",
		    "consumption": 11.7,
		    "emissions": 277
		  },
		  {
		    "model": "Audi RS 3 LIMOUSINE MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK51",
		    "consumption": 8.3,
		    "emissions": 188
		  },
		  {
		    "model": "Audi RS 3 LIMOUSINE MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK52",
		    "consumption": 8.4,
		    "emissions": 191
		  },
		  {
		    "model": "Audi RS 3 LIMOUSINE MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK53",
		    "consumption": 8.3,
		    "emissions": 188
		  },
		  {
		    "model": "Audi RS 3 LIMOUSINE MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK54",
		    "consumption": 8.4,
		    "emissions": 191
		  },
		  {
		    "model": "Audi RS 3 SPORTBACK MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK01",
		    "consumption": 8.3,
		    "emissions": 189
		  },
		  {
		    "model": "Audi RS 3 SPORTBACK MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK02",
		    "consumption": 8.4,
		    "emissions": 192
		  },
		  {
		    "model": "Audi RS 3 SPORTBACK MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK03",
		    "consumption": 8.3,
		    "emissions": 189
		  },
		  {
		    "model": "Audi RS 3 SPORTBACK MY18 2.5 TFSI AUT. 7V 294KW (400CV) QUATTRO PK04",
		    "consumption": 8.4,
		    "emissions": 192
		  },
		  {
		    "model": "Audi RS 6 AVANT MY18 4.0 FSI AUT. 8V 412KW (560CV) QUATTRO",
		    "consumption": 9.6,
		    "emissions": 223
		  },
		  {
		    "model": "Audi RS 6 AVANT PERFOMANCE MY18 4.0 FSI AUT. 8V 445KW (605CV) QUATTRO",
		    "consumption": 9.6,
		    "emissions": 223
		  },
		  {
		    "model": "Audi RS 7 SPORTBACK MY18 4.0 FSI AUT. 8V 412KW (560CV) QUATTRO",
		    "consumption": 9.5,
		    "emissions": 221
		  },
		  {
		    "model": "Audi RS 7 SPORTBACK PERFOMANCE MY18 4.0 FSI AUT. 8V 445KW (605CV) QUATTRO",
		    "consumption": 9.5,
		    "emissions": 221
		  },
		  {
		    "model": "Audi S1 MY18 2.0 TFSI MAN. 6V 170KW (231CV) QUATTRO PK06",
		    "consumption": 7,
		    "emissions": 162
		  },
		  {
		    "model": "Audi S1 MY18 2.0 TFSI MAN. 6V 170KW (231CV) QUATTRO PK09",
		    "consumption": 7.1,
		    "emissions": 166
		  },
		  {
		    "model": "Audi S1 SPORTBACK MY18 2.0 TFSI MAN. 6V 170KW (231CV) QUATTRO PK06",
		    "consumption": 7.1,
		    "emissions": 166
		  },
		  {
		    "model": "Audi S1 SPORTBACK MY18 2.0 TFSI MAN. 6V 170KW (231CV) QUATTRO PK09",
		    "consumption": 7.2,
		    "emissions": 168
		  },
		  {
		    "model": "Audi S3 CABRIOLET MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK46",
		    "consumption": 6.7,
		    "emissions": 153
		  },
		  {
		    "model": "Audi S3 CABRIOLET MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK48",
		    "consumption": 6.8,
		    "emissions": 156
		  },
		  {
		    "model": "Audi S3 LIMOUSINE MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK47",
		    "consumption": 6.5,
		    "emissions": 149
		  },
		  {
		    "model": "Audi S3 MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK37",
		    "consumption": 6.4,
		    "emissions": 146
		  },
		  {
		    "model": "Audi S3 MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK39",
		    "consumption": 6.5,
		    "emissions": 149
		  },
		  {
		    "model": "Audi S3 SPORTBACK MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK37",
		    "consumption": 6.5,
		    "emissions": 149
		  },
		  {
		    "model": "Audi S3 SPORTBACK MY18 2.0 TFSI AUT. 7V 228KW (310CV) QUATTRO PK39",
		    "consumption": 6.6,
		    "emissions": 152
		  },
		  {
		    "model": "Audi S4 AVANT MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK16",
		    "consumption": 7.5,
		    "emissions": 171
		  },
		  {
		    "model": "Audi S4 AVANT MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK17",
		    "consumption": 7.6,
		    "emissions": 175
		  },
		  {
		    "model": "Audi S4 LIMOUSINE MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK16",
		    "consumption": 7.3,
		    "emissions": 166
		  },
		  {
		    "model": "Audi S4 LIMOUSINE MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK17",
		    "consumption": 7.5,
		    "emissions": 170
		  },
		  {
		    "model": "Audi S5 CABRIOLET MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK24",
		    "consumption": 7.7,
		    "emissions": 175
		  },
		  {
		    "model": "Audi S5 CABRIOLET MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK25",
		    "consumption": 7.8,
		    "emissions": 177
		  },
		  {
		    "model": "Audi S5 CABRIOLET MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK26",
		    "consumption": 7.8,
		    "emissions": 177
		  },
		  {
		    "model": "Audi S5 COUPÉ MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK24",
		    "consumption": 7.3,
		    "emissions": 166
		  },
		  {
		    "model": "Audi S5 COUPÉ MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK25",
		    "consumption": 7.4,
		    "emissions": 170
		  },
		  {
		    "model": "Audi S5 COUPÉ MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK26",
		    "consumption": 7.4,
		    "emissions": 170
		  },
		  {
		    "model": "Audi S5 SPORTBACK MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK26",
		    "consumption": 7.5,
		    "emissions": 170
		  },
		  {
		    "model": "Audi S6 AVANT MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK05",
		    "consumption": 9.4,
		    "emissions": 219
		  },
		  {
		    "model": "Audi S6 AVANT MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK13",
		    "consumption": 9.6,
		    "emissions": 224
		  },
		  {
		    "model": "Audi S6 LIMOUSINE MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK05",
		    "consumption": 9.2,
		    "emissions": 214
		  },
		  {
		    "model": "Audi S6 LIMOUSINE MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK13",
		    "consumption": 9.4,
		    "emissions": 218
		  },
		  {
		    "model": "Audi S7 SPORTBACK MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK10",
		    "consumption": 9.3,
		    "emissions": 215
		  },
		  {
		    "model": "Audi S7 SPORTBACK MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK11",
		    "consumption": 9.5,
		    "emissions": 220
		  },
		  {
		    "model": "Audi S7 SPORTBACK MY18 4.0 FSI AUT. 7V 331KW (450CV) QUATTRO PK12",
		    "consumption": 9.5,
		    "emissions": 220
		  },
		  {
		    "model": "Audi S8 MY18 4.0 FSI AUT. 8V 382KW (520CV) QUATTRO PK05",
		    "consumption": 9.4,
		    "emissions": 216
		  },
		  {
		    "model": "Audi S8 MY18 4.0 FSI AUT. 8V 382KW (520CV) QUATTRO PK06",
		    "consumption": 9.6,
		    "emissions": 220
		  },
		  {
		    "model": "Audi S8 PLUS MY18 4.0 FSI AUT. 8V 445KW (605CV) QUATTRO PK11",
		    "consumption": 9.9,
		    "emissions": 229
		  },
		  {
		    "model": "Audi S8 PLUS MY18 4.0 FSI AUT. 8V 445KW (605CV) QUATTRO PK12",
		    "consumption": 10,
		    "emissions": 231
		  },
		  {
		    "model": "Audi S8 PLUS MY18 4.0 FSI AUT. 8V 445KW (605CV) QUATTRO PK14",
		    "consumption": 10,
		    "emissions": 231
		  },
		  {
		    "model": "Audi SQ5 MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK08",
		    "consumption": 8.3,
		    "emissions": 189
		  },
		  {
		    "model": "Audi SQ5 MY18 3.0 TFSI AUT. 8V 260KW (354CV) QUATTRO PK10",
		    "consumption": 8.5,
		    "emissions": 195
		  },
		  {
		    "model": "Audi SQ7 MY18 4.0 TDI AUT. 8V 320KW (435CV) 5PL QUATTRO PK06",
		    "consumption": 7.5,
		    "emissions": 198
		  },
		  {
		    "model": "Audi SQ7 MY18 4.0 TDI AUT. 8V 320KW (435CV) 5PL QUATTRO PK07",
		    "consumption": 7.2,
		    "emissions": 189
		  },
		  {
		    "model": "Audi SQ7 MY18 4.0 TDI AUT. 8V 320KW (435CV) 5PL QUATTRO PK10",
		    "consumption": 7.5,
		    "emissions": 198
		  },
		  {
		    "model": "Audi SQ7 MY18 4.0 TDI AUT. 8V 320KW (435CV) 7PL QUATTRO PK06",
		    "consumption": 7.6,
		    "emissions": 199
		  },
		  {
		    "model": "Audi SQ7 MY18 4.0 TDI AUT. 8V 320KW (435CV) 7PL QUATTRO PK07",
		    "consumption": 7.2,
		    "emissions": 190
		  },
		  {
		    "model": "Audi SQ7 MY18 4.0 TDI AUT. 8V 320KW (435CV) 7PL QUATTRO PK10",
		    "consumption": 7.6,
		    "emissions": 199
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 1.8 TFSI AUT. 7V 132KW (180CV) PK02",
		    "consumption": 5.7,
		    "emissions": 129
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 1.8 TFSI AUT. 7V 132KW (180CV) PK03",
		    "consumption": 5.8,
		    "emissions": 131
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 1.8 TFSI AUT. 7V 132KW (180CV) PK04",
		    "consumption": 5.9,
		    "emissions": 133
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 1.8 TFSI MAN. 6V 132KW (180CV) PK02",
		    "consumption": 5.8,
		    "emissions": 134
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 1.8 TFSI MAN. 6V 132KW (180CV) PK03",
		    "consumption": 5.9,
		    "emissions": 136
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 1.8 TFSI MAN. 6V 132KW (180CV) PK04",
		    "consumption": 6,
		    "emissions": 138
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TDI MAN. 6V 135KW (184CV) PK02",
		    "consumption": 4.3,
		    "emissions": 114
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TDI MAN. 6V 135KW (184CV) PK02",
		    "consumption": 4.6,
		    "emissions": 122
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TDI MAN. 6V 135KW (184CV) PK03",
		    "consumption": 4.6,
		    "emissions": 123
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TDI MAN. 6V 135KW (184CV) PK03",
		    "consumption": 4.4,
		    "emissions": 115
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TDI MAN. 6V 135KW (184CV) PK04",
		    "consumption": 4.5,
		    "emissions": 117
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TDI MAN. 6V 135KW (184CV) PK04",
		    "consumption": 4.7,
		    "emissions": 124
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI AUT. 6V 169KW (230CV) PK02",
		    "consumption": 6.3,
		    "emissions": 146
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI AUT. 6V 169KW (230CV) PK03",
		    "consumption": 6.4,
		    "emissions": 148
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI AUT. 6V 169KW (230CV) PK04",
		    "consumption": 6.5,
		    "emissions": 150
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI AUT. 6V 169KW (230CV) QUATTRO PK02",
		    "consumption": 6.4,
		    "emissions": 149
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI AUT. 6V 169KW (230CV) QUATTRO PK03",
		    "consumption": 6.5,
		    "emissions": 151
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI AUT. 6V 169KW (230CV) QUATTRO PK04",
		    "consumption": 6.6,
		    "emissions": 153
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI MAN. 6V 169KW (230CV) PK02",
		    "consumption": 5.9,
		    "emissions": 137
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI MAN. 6V 169KW (230CV) PK03",
		    "consumption": 6,
		    "emissions": 139
		  },
		  {
		    "model": "Audi TT COUPÉ MY18 2.0 TFSI MAN. 6V 169KW (230CV) PK04",
		    "consumption": 6.1,
		    "emissions": 141
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 1.8 TFSI AUT. 7V 132KW (180CV) PK02",
		    "consumption": 5.8,
		    "emissions": 132
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 1.8 TFSI AUT. 7V 132KW (180CV) PK03",
		    "consumption": 5.9,
		    "emissions": 134
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 1.8 TFSI AUT. 7V 132KW (180CV) PK04",
		    "consumption": 6,
		    "emissions": 136
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 1.8 TFSI MAN. 6V 132KW (180CV) PK02",
		    "consumption": 5.9,
		    "emissions": 138
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 1.8 TFSI MAN. 6V 132KW (180CV) PK03",
		    "consumption": 6,
		    "emissions": 140
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 1.8 TFSI MAN. 6V 132KW (180CV) PK04",
		    "consumption": 6.1,
		    "emissions": 142
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TDI MAN. 6V 135KW (184CV) PK02",
		    "consumption": 4.5,
		    "emissions": 118
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TDI MAN. 6V 135KW (184CV) PK02",
		    "consumption": 4.7,
		    "emissions": 126
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TDI MAN. 6V 135KW (184CV) PK03",
		    "consumption": 4.5,
		    "emissions": 119
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TDI MAN. 6V 135KW (184CV) PK03",
		    "consumption": 4.7,
		    "emissions": 127
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TDI MAN. 6V 135KW (184CV) PK04",
		    "consumption": 4.6,
		    "emissions": 121
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TDI MAN. 6V 135KW (184CV) PK04",
		    "consumption": 4.8,
		    "emissions": 129
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI AUT. 6V 169KW (230CV) PK02",
		    "consumption": 6.5,
		    "emissions": 151
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI AUT. 6V 169KW (230CV) PK03",
		    "consumption": 6.6,
		    "emissions": 153
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI AUT. 6V 169KW (230CV) PK04",
		    "consumption": 6.7,
		    "emissions": 155
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI AUT. 6V 169KW (230CV) QUATTRO PK02",
		    "consumption": 6.7,
		    "emissions": 154
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI AUT. 6V 169KW (230CV) QUATTRO PK03",
		    "consumption": 6.8,
		    "emissions": 156
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI AUT. 6V 169KW (230CV) QUATTRO PK04",
		    "consumption": 6.9,
		    "emissions": 158
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI MAN. 6V 169KW (230CV) PK02",
		    "consumption": 6,
		    "emissions": 140
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI MAN. 6V 169KW (230CV) PK03",
		    "consumption": 6.1,
		    "emissions": 142
		  },
		  {
		    "model": "Audi TT ROADSTER MY18 2.0 TFSI MAN. 6V 169KW (230CV) PK04",
		    "consumption": 6.2,
		    "emissions": 144
		  },
		  {
		    "model": "Audi TTS COUPÉ MY18 2.0 TFSI AUT. 6V 228KW (310CV) QUATTRO PK05",
		    "consumption": 6.7,
		    "emissions": 155
		  },
		  {
		    "model": "Audi TTS COUPÉ MY18 2.0 TFSI AUT. 6V 228KW (310CV) QUATTRO PK06",
		    "consumption": 6.9,
		    "emissions": 159
		  },
		  {
		    "model": "Audi TTS COUPÉ MY18 2.0 TFSI MAN. 6V 228KW (310CV) QUATTRO PK05",
		    "consumption": 7.1,
		    "emissions": 164
		  },
		  {
		    "model": "Audi TTS COUPÉ MY18 2.0 TFSI MAN. 6V 228KW (310CV) QUATTRO PK06",
		    "consumption": 7.3,
		    "emissions": 168
		  },
		  {
		    "model": "Audi TTS ROADSTER MY18 2.0 TFSI AUT. 6V 228KW (310CV) QUATTRO PK05",
		    "consumption": 6.9,
		    "emissions": 159
		  },
		  {
		    "model": "Audi TTS ROADSTER MY18 2.0 TFSI AUT. 6V 228KW (310CV) QUATTRO PK06",
		    "consumption": 7.1,
		    "emissions": 163
		  },
		  {
		    "model": "Audi TTS ROADSTER MY18 2.0 TFSI MAN. 6V 228KW (310CV) QUATTRO PK05",
		    "consumption": 7.3,
		    "emissions": 169
		  },
		  {
		    "model": "Audi TTS ROADSTER MY18 2.0 TFSI MAN. 6V 228KW (310CV) QUATTRO PK06",
		    "consumption": 7.5,
		    "emissions": 173
		  }
		];
 		var n = ele.value;
 		var cons = audi[n].consumption
 		var emi = audi[n].emissions
		document.getElementById("consumption").setAttribute("value", cons)
		document.getElementById("emissions").setAttribute("value", emi)
		
}