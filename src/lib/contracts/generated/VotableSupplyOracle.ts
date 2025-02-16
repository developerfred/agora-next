/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface VotableSupplyOracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_updateVotableSupply"
      | "_updateVotableSupplyAt"
      | "getIndexBeforeBlock"
      | "latestCheckpoint"
      | "nextIndex"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
      | "votableSupply()"
      | "votableSupply(uint256)"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OwnershipTransferred"
      | "VotableSupplyCheckpointUpdated"
      | "VotableSupplyUpdated"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "_updateVotableSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_updateVotableSupplyAt",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getIndexBeforeBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestCheckpoint",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "votableSupply()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votableSupply(uint256)",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "_updateVotableSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_updateVotableSupplyAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIndexBeforeBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestCheckpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votableSupply()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votableSupply(uint256)",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VotableSupplyCheckpointUpdatedEvent {
  export type InputTuple = [
    checkpointBlockNumber: BigNumberish,
    prevVotableSupply: BigNumberish,
    newVotableSupply: BigNumberish,
  ];
  export type OutputTuple = [
    checkpointBlockNumber: bigint,
    prevVotableSupply: bigint,
    newVotableSupply: bigint,
  ];
  export interface OutputObject {
    checkpointBlockNumber: bigint;
    prevVotableSupply: bigint;
    newVotableSupply: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VotableSupplyUpdatedEvent {
  export type InputTuple = [
    prevVotableSupply: BigNumberish,
    newVotableSupply: BigNumberish,
  ];
  export type OutputTuple = [
    prevVotableSupply: bigint,
    newVotableSupply: bigint,
  ];
  export interface OutputObject {
    prevVotableSupply: bigint;
    newVotableSupply: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface VotableSupplyOracle extends BaseContract {
  connect(runner?: ContractRunner | null): VotableSupplyOracle;
  waitForDeployment(): Promise<this>;

  interface: VotableSupplyOracleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  _updateVotableSupply: TypedContractMethod<
    [newVotableSupply: BigNumberish],
    [void],
    "nonpayable"
  >;

  _updateVotableSupplyAt: TypedContractMethod<
    [index: BigNumberish, newVotableSupply: BigNumberish],
    [void],
    "nonpayable"
  >;

  getIndexBeforeBlock: TypedContractMethod<
    [blockNumber: BigNumberish],
    [bigint],
    "view"
  >;

  latestCheckpoint: TypedContractMethod<
    [],
    [[boolean, bigint, bigint]],
    "view"
  >;

  nextIndex: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  "votableSupply()": TypedContractMethod<[], [bigint], "view">;

  "votableSupply(uint256)": TypedContractMethod<
    [blockNumber: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_updateVotableSupply"
  ): TypedContractMethod<
    [newVotableSupply: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "_updateVotableSupplyAt"
  ): TypedContractMethod<
    [index: BigNumberish, newVotableSupply: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getIndexBeforeBlock"
  ): TypedContractMethod<[blockNumber: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "latestCheckpoint"
  ): TypedContractMethod<[], [[boolean, bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "nextIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "votableSupply()"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "votableSupply(uint256)"
  ): TypedContractMethod<[blockNumber: BigNumberish], [bigint], "view">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "VotableSupplyCheckpointUpdated"
  ): TypedContractEvent<
    VotableSupplyCheckpointUpdatedEvent.InputTuple,
    VotableSupplyCheckpointUpdatedEvent.OutputTuple,
    VotableSupplyCheckpointUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "VotableSupplyUpdated"
  ): TypedContractEvent<
    VotableSupplyUpdatedEvent.InputTuple,
    VotableSupplyUpdatedEvent.OutputTuple,
    VotableSupplyUpdatedEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "VotableSupplyCheckpointUpdated(uint256,uint256,uint256)": TypedContractEvent<
      VotableSupplyCheckpointUpdatedEvent.InputTuple,
      VotableSupplyCheckpointUpdatedEvent.OutputTuple,
      VotableSupplyCheckpointUpdatedEvent.OutputObject
    >;
    VotableSupplyCheckpointUpdated: TypedContractEvent<
      VotableSupplyCheckpointUpdatedEvent.InputTuple,
      VotableSupplyCheckpointUpdatedEvent.OutputTuple,
      VotableSupplyCheckpointUpdatedEvent.OutputObject
    >;

    "VotableSupplyUpdated(uint256,uint256)": TypedContractEvent<
      VotableSupplyUpdatedEvent.InputTuple,
      VotableSupplyUpdatedEvent.OutputTuple,
      VotableSupplyUpdatedEvent.OutputObject
    >;
    VotableSupplyUpdated: TypedContractEvent<
      VotableSupplyUpdatedEvent.InputTuple,
      VotableSupplyUpdatedEvent.OutputTuple,
      VotableSupplyUpdatedEvent.OutputObject
    >;
  };
}
