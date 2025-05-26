const fs = require('fs');
const Guid = require('guid');
const { convert } = require('convert-svg-to-png');

function getBoxTextSvg(text) {
    return `<svg width="256px" height="128px" style="background: #ffcc31; padding: 10px;">
    <text x="0" y="0" style="dominant-baseline: hanging; font-size:128px; font-weight: bold;" textLength="95%" lengthAdjust="spacingAndGlyphs">${text}</text>
    </svg>`;
}

function getSpotNumberSvg(text) {
    var size = 70;
    if (text.length == 3)
        size = 55;

    return `<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="50" fill="#ffcc31"></circle>
    <text text-anchor="middle" alignment-baseline="middle" x="64" y="70" font-size="${size}" font-family="arial">${text}</text>
    </svg>`;
}

function getMaterial(text) {
    return `<Material Version="1.4.0" Name="${text}" Guid="{${Guid.create().toString().toUpperCase()}}" SurfaceType="ASPHALT" Type="CODE_DIFFUSE" Metal="0.000000" Rough="0.000000" Opacity="1.000000" BlendMode="Transparent">
	<TagList/>
	<FlagList/>
	<TextureList>
		<Texture FileName="textures\\${text}.png" Binding="MTL_BITMAP_DECAL0"/>
	</TextureList>
	<Attributes>
		<Diffuse Red="1.000000" Green="1.000000" Blue="1.000000"/>
		<Emissive Red="0.000000" Green="0.000000" Blue="0.000000"/>
		<UVOffset U="0.000000" V="0.000000"/>
		<UVScale U="1.000000" V="1.000000"/>
		<UVRotate>0.000000</UVRotate>
		<ExtraParameters>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
			<Parameter Value="0.000000"/>
		</ExtraParameters>
	</Attributes>
</Material>`;
}

function writePngAndMaterial(text, filename, svgGeneratorFunction) {
    convert(svgGeneratorFunction(text)).then((png) => {
        fs.writeFileSync(`output/${filename}.png`, png);
        fs.writeFileSync(`output/${filename}.png.FLAGS`, "_DEFAULT=+PRECOMPUTEDINVAVG+QUALITYHIGH");
        fs.writeFileSync(`output/${filename}.material`, getMaterial(filename));
    });
}


var gate = [
    "1",
    "3",
    "4",
    "6",
    "8",
    "10",
    "11",
    "14",
    "16",
    "17",
    "18",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",

    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",

    "121",
    "121F",
    "122",
    "123",
    "123F",
    "124",
    "125",
    "126",
    "128",
    "129",
    "130",
    "131",
    "132",
    "133",
    "134",
    "135",
    "136",
    "137",
    "138",
    "139",
    "140",
    "141",
    "142",

    "201",
    "202",
    "203",
    "204",
    "205",
    "206",

    "211",
    "212",
    "213",
    "214",

    "221",
    "222",
    "223",
    "224",
    "225",
    "226",
    "227",
    "228",
    "229",
    "230",
    "231",
    "232",
    "233",
    "234",
    "235",
    "236",
    "237",

    "301",
    "302",
    "303",
    "304",
    "305",
    "306",
    "307",

    "501",
    "502",
    "503",
    "504",
    "505",
    "506",
    "507",
    "508",
    "509",
    "510",
    "511",
    "512",
    "513",
    "514",
    "515",
    "516",
    "517",
    "518",
    "519",
    "520",
    "521",
    "522",
    "523",
    "524",
    "525",
    "526",
    "527",

    "701",
    "702",
    "703",
    "704",

    "902",
    "903",
    "904",
    "905",
    "906",
    "907",
    "908",
    "908-2",
    "909",
    "910",
    "911",
    "912",
    "913",
    "914",
    "915",
    "916",
    "917",
    "918",
    "919",
    "920",
    "921",
    "922",
    "923",
    "937",
    "938",
    "939",
    "944",
    "944-1"
];

/*
gate.forEach(e => {
    writePngAndMaterial(e, e, getSpotNumberSvg);
});
*/

writePngAndMaterial("P3↗", "P3UR", getBoxTextSvg);
/*
writePngAndMaterial("↑G10", "UPG10", getBoxTextSvg);
writePngAndMaterial("↖G11", "ULG11", getBoxTextSvg);
writePngAndMaterial("↖G10", "ULG10", getBoxTextSvg);
writePngAndMaterial("↖G8", "ULG8", getBoxTextSvg);
writePngAndMaterial("↖G7", "ULG7", getBoxTextSvg);
writePngAndMaterial("G8↗", "G8UR", getBoxTextSvg);
writePngAndMaterial("G9↗", "G9UR", getBoxTextSvg);
writePngAndMaterial("G10↗", "G10UR", getBoxTextSvg);
writePngAndMaterial("G11↑", "G11UP", getBoxTextSvg);
writePngAndMaterial("↑G7", "UPG7", getBoxTextSvg);
writePngAndMaterial("R↗", "RUR", getBoxTextSvg);
writePngAndMaterial("R↑", "RUP", getBoxTextSvg);
writePngAndMaterial("P↗", "PUR", getBoxTextSvg);
*/