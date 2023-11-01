type AbiParamKindUint = 'uint8' | 'uint16' | 'uint24' | 'uint32' | 'uint64' | 'uint128' | 'uint160' | 'uint256';
type AbiParamKindInt = 'int8' | 'int16' | 'int24' | 'int32' | 'int64' | 'int128' | 'int160' | 'int256';
type AbiParamKindVarUint = 'varuint16' | 'varuint32';
type AbiParamKindVarInt = 'varint16' | 'varint32';
type AbiParamKindTuple = 'tuple';
type AbiParamKindBool = 'bool';
type AbiParamKindCell = 'cell';
type AbiParamKindAddress = 'address';
type AbiParamKindBytes = 'bytes';
type AbiParamKindFixedBytes = `fixedbytes${NonZeroDigit | `${'1' | '2'}${Digit}` | '30' | '31' | '32'}`;
type AbiParamKindString = 'string';
type AbiParamKindGram = 'gram';
type AbiParamKindTime = 'time';
type AbiParamKindExpire = 'expire';
type AbiParamKindPublicKey = 'pubkey';
type AbiParamKindArray = `${AbiParamKind}[]`;

type AbiParamKindMapKey = AbiParamKindInt | AbiParamKindUint | AbiParamKindAddress;
type AbiParamKindMap = `map(${AbiParamKindMapKey},${AbiParamKind | `${AbiParamKind}[]`})`;

type AbiParamOptional = `optional(${AbiParamKind})`;
type AbiParamRef = `ref(${AbiParamKind})`;
type AbiParamOptionalRef = `optional(ref(${AbiParamKind}))`;
type AbiParamRefOptional = `ref(optional(${AbiParamKind}))`;

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type NonZeroDigit = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

/**
 * @category Models
 */
export type AbiParamKind =
  | AbiParamKindUint
  | AbiParamKindInt
  | AbiParamKindVarUint
  | AbiParamKindVarInt
  | AbiParamKindTuple
  | AbiParamKindBool
  | AbiParamKindCell
  | AbiParamKindAddress
  | AbiParamKindBytes
  | AbiParamKindFixedBytes
  | AbiParamKindString
  | AbiParamKindGram
  | AbiParamKindTime
  | AbiParamKindExpire
  | AbiParamKindPublicKey;

/**
 * @category Models
 */
export type AbiParam = {
  name: string;
  type:
    | AbiParamKind
    | AbiParamKindMap
    | AbiParamKindArray
    | AbiParamOptional
    | AbiParamRef
    | AbiParamOptionalRef
    | AbiParamRefOptional;
  components?: AbiParam[];
};