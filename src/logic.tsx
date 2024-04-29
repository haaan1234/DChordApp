import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React, { MouseEventHandler } from "react"
import * as Tone from 'tone'

//鍵盤音（1オクターブのみ）
const tone = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4"];

//メジャーダイアトニックコード
const MdChords = [
    ["C", "Dm", "Em", "F", "G", "Am", "Bm(♭5)"],
    ["D♭", "E♭m", "Fm", "G♭", "A♭", "B♭m", "Cm(♭5)"],
    ["D", "Em", "F#m", "G", "A", "Bm", "C#m(♭5)"],
    ["E♭", "Fm", "Gm", "A♭", "B♭", "Cm", "Dm(♭5)"],
    ["E", "F#m", "G#m", "A", "B", "C#m", "D#m(♭5)"],
    ["F", "Gm", "Am", "B♭", "C", "Dm", "Em(♭5)"],
    ["G♭", "A♭m", "B♭m", "C♭", "D♭", "E♭m", "Fm(♭5)"],
    ["G", "Am", "Bm", "C", "D", "Em", "F#m(♭5)"],
    ["A♭", "B♭m", "Cm", "D♭", "E♭", "Fm", "Gm(♭5)"],
    ["A", "Bm", "C#m", "D", "E", "F#m", "G#m(♭5)"],
    ["B♭", "Cm", "Dm", "E♭", "F", "Gm", "Am(♭5)"],
    ["B", "C#m", "D#m", "E", "F#", "G#m", "A#m(♭5)"]
]

//マイナーダイアトニックコード
const mDChords = [
    ["Cm", "Dm♭5", "E♭", "Fm", "Gm", "G#", "B♭"],
    ["D♭m", "E♭m♭5", "E", "F#m", "G#m", "A", "B"],
    ["Dm", "Em♭5", "F", "Gm", "Am", "B♭", "C"],
    ["E♭m", "Fm♭5", "F#", "G#m", "B♭m", "B", "C#"],
    ["Em", "F#m♭5", "G", "Am", "Bm", "C", "D"],
    ["Fm", "Gm♭5", "G#", "B♭m", "Cm", "C#", "E♭"],
    ["G♭m", "G#m♭5", "A", "Bm", "C#m", "D", "E"],
    ["Gm", "Am♭5", "B♭", "Cm", "Dm", "E♭", "F"],
    ["A♭m", "B♭m♭5", "B", "C#m", "E♭m", "E", "F#"],
    ["Am", "Bm♭5", "C", "Dm", "Em", "F", "G"],
    ["B♭m", "Cm♭5", "C#", "E♭m", "Fm", "F#", "G#"],
    ["Bm", "C#m♭5", "D", "Em", "F#m", "G", "A"]
]

//全ダイアトニックコード
const dChords: string[][][] = [
    MdChords,
    mDChords
]

type Props = {
    dkey: number,
    Mm: number
}

//音源接続
var synth = new Tone.PolySynth().toMaster();

//ボタン表記が大文字になるのを防ぐ
const TextButton = styled(Button)`
  text-transform: none;
`;


export const MakeDChords = (props: Props) => {
    if (props.Mm === 0) {
        var Ⅰ_chord = [tone[props.dkey], tone[props.dkey + 4], tone[props.dkey + 7]];
        var Ⅱ_Chord = [tone[props.dkey + 2], tone[props.dkey + 5], tone[props.dkey + 9]];
        var Ⅲ_chord = [tone[props.dkey + 4], tone[props.dkey + 7], tone[props.dkey + 11]];
        var Ⅳ_chord = [tone[props.dkey + 5], tone[props.dkey + 9], tone[props.dkey + 12]];
        var Ⅴ_chord = [tone[props.dkey + 7], tone[props.dkey + 11], tone[props.dkey + 14]];
        var Ⅵ_chord = [tone[props.dkey + 9], tone[props.dkey + 12], tone[props.dkey + 16]];
        var Ⅶ_chord = [tone[props.dkey + 11], tone[props.dkey + 14], tone[props.dkey + 17]];

        return (<ButtonGroup size="large" aria-label="Large button group">
            <TextButton key="one" onClick={() => { synth.triggerAttackRelease(Ⅰ_chord, '4n'); }}>{dChords[props.Mm][props.dkey][0]}{"\n"}Ⅰ</TextButton>,
            <TextButton key="two" onClick={() => { synth.triggerAttackRelease(Ⅱ_Chord, '4n'); }}>{dChords[props.Mm][props.dkey][1]}{"\n"}Ⅱ</TextButton>,
            <TextButton key="three" onClick={() => { synth.triggerAttackRelease(Ⅲ_chord, '4n'); }}>{dChords[props.Mm][props.dkey][2]}{"\n"}Ⅲ</TextButton>,
            <TextButton key="four" onClick={() => { synth.triggerAttackRelease(Ⅳ_chord, '4n'); }}>{dChords[props.Mm][props.dkey][3]}{"\n"}Ⅳ</TextButton>,
            <TextButton key="five" onClick={() => { synth.triggerAttackRelease(Ⅴ_chord, '4n'); }}>{dChords[props.Mm][props.dkey][4]}{"\n"}Ⅴ</TextButton>,
            <TextButton key="six" onClick={() => { synth.triggerAttackRelease(Ⅵ_chord, '4n'); }}>{dChords[props.Mm][props.dkey][5]}{"\n"}Ⅵ</TextButton>,
            <TextButton key="seven" onClick={() => { synth.triggerAttackRelease(Ⅶ_chord, '4n'); }}>{dChords[props.Mm][props.dkey][6]}{"\n"}Ⅶ</TextButton>
        </ButtonGroup>
        )
    } else {
        var Ⅰ_chord = [tone[props.dkey], tone[props.dkey + 3], tone[props.dkey + 7]];
        var Ⅱ_Chord = [tone[props.dkey + 2], tone[props.dkey + 5], tone[props.dkey + 8]];
        var Ⅲ_chord = [tone[props.dkey + 3], tone[props.dkey + 7], tone[props.dkey + 10]];
        var Ⅳ_chord = [tone[props.dkey + 5], tone[props.dkey + 8], tone[props.dkey + 12]];
        var Ⅴ_chord = [tone[props.dkey + 7], tone[props.dkey + 10], tone[props.dkey + 14]];
        var Ⅵ_chord = [tone[props.dkey + 8], tone[props.dkey + 12], tone[props.dkey + 15]];
        var Ⅶ_chord = [tone[props.dkey + 10], tone[props.dkey + 14], tone[props.dkey + 17]];

        return (
            <ButtonGroup size="large" aria-label="Large button group">
                <TextButton key="one" onClick={() => { synth.triggerAttackRelease(Ⅰ_chord, '4n'); }}>{dChords[props.Mm][props.dkey][0]}{"\n"}Ⅰ</TextButton>,
                <TextButton key="two" onClick={() => { synth.triggerAttackRelease(Ⅱ_Chord, '4n'); }}>{dChords[props.Mm][props.dkey][1]}{"\n"}Ⅱ</TextButton>,
                <TextButton key="three" onClick={() => { synth.triggerAttackRelease(Ⅲ_chord, '4n'); }}>{dChords[props.Mm][props.dkey][2]}{"\n"}Ⅲ</TextButton>,
                <TextButton key="four" onClick={() => { synth.triggerAttackRelease(Ⅳ_chord, '4n'); }}>{dChords[props.Mm][props.dkey][3]}{"\n"}Ⅳ</TextButton>,
                <TextButton key="five" onClick={() => { synth.triggerAttackRelease(Ⅴ_chord, '4n'); }}>{dChords[props.Mm][props.dkey][4]}{"\n"}Ⅴ</TextButton>,
                <TextButton key="six" onClick={() => { synth.triggerAttackRelease(Ⅵ_chord, '4n'); }}>{dChords[props.Mm][props.dkey][5]}{"\n"}Ⅵ</TextButton>,
                <TextButton key="seven" onClick={() => { synth.triggerAttackRelease(Ⅶ_chord, '4n'); }}>{dChords[props.Mm][props.dkey][6]}{"\n"}Ⅶ</TextButton>
            </ButtonGroup>
        )
    }
}
