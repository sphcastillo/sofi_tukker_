
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model StoreItem
 * 
 */
export type StoreItem = $Result.DefaultSelection<Prisma.$StoreItemPayload>
/**
 * Model TourDate
 * 
 */
export type TourDate = $Result.DefaultSelection<Prisma.$TourDatePayload>
/**
 * Model BreadGood
 * 
 */
export type BreadGood = $Result.DefaultSelection<Prisma.$BreadGoodPayload>
/**
 * Model MerchProduct
 * 
 */
export type MerchProduct = $Result.DefaultSelection<Prisma.$MerchProductPayload>
/**
 * Model MusicRelease
 * 
 */
export type MusicRelease = $Result.DefaultSelection<Prisma.$MusicReleasePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more StoreItems
 * const storeItems = await prisma.storeItem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more StoreItems
   * const storeItems = await prisma.storeItem.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.storeItem`: Exposes CRUD operations for the **StoreItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreItems
    * const storeItems = await prisma.storeItem.findMany()
    * ```
    */
  get storeItem(): Prisma.StoreItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourDate`: Exposes CRUD operations for the **TourDate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourDates
    * const tourDates = await prisma.tourDate.findMany()
    * ```
    */
  get tourDate(): Prisma.TourDateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.breadGood`: Exposes CRUD operations for the **BreadGood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BreadGoods
    * const breadGoods = await prisma.breadGood.findMany()
    * ```
    */
  get breadGood(): Prisma.BreadGoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.merchProduct`: Exposes CRUD operations for the **MerchProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MerchProducts
    * const merchProducts = await prisma.merchProduct.findMany()
    * ```
    */
  get merchProduct(): Prisma.MerchProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.musicRelease`: Exposes CRUD operations for the **MusicRelease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MusicReleases
    * const musicReleases = await prisma.musicRelease.findMany()
    * ```
    */
  get musicRelease(): Prisma.MusicReleaseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    StoreItem: 'StoreItem',
    TourDate: 'TourDate',
    BreadGood: 'BreadGood',
    MerchProduct: 'MerchProduct',
    MusicRelease: 'MusicRelease'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "storeItem" | "tourDate" | "breadGood" | "merchProduct" | "musicRelease"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      StoreItem: {
        payload: Prisma.$StoreItemPayload<ExtArgs>
        fields: Prisma.StoreItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          findFirst: {
            args: Prisma.StoreItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          findMany: {
            args: Prisma.StoreItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>[]
          }
          create: {
            args: Prisma.StoreItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          createMany: {
            args: Prisma.StoreItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>[]
          }
          delete: {
            args: Prisma.StoreItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          update: {
            args: Prisma.StoreItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          deleteMany: {
            args: Prisma.StoreItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>[]
          }
          upsert: {
            args: Prisma.StoreItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreItemPayload>
          }
          aggregate: {
            args: Prisma.StoreItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreItem>
          }
          groupBy: {
            args: Prisma.StoreItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreItemCountArgs<ExtArgs>
            result: $Utils.Optional<StoreItemCountAggregateOutputType> | number
          }
        }
      }
      TourDate: {
        payload: Prisma.$TourDatePayload<ExtArgs>
        fields: Prisma.TourDateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourDateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourDateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          findFirst: {
            args: Prisma.TourDateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourDateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          findMany: {
            args: Prisma.TourDateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>[]
          }
          create: {
            args: Prisma.TourDateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          createMany: {
            args: Prisma.TourDateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourDateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>[]
          }
          delete: {
            args: Prisma.TourDateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          update: {
            args: Prisma.TourDateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          deleteMany: {
            args: Prisma.TourDateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourDateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourDateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>[]
          }
          upsert: {
            args: Prisma.TourDateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          aggregate: {
            args: Prisma.TourDateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourDate>
          }
          groupBy: {
            args: Prisma.TourDateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourDateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourDateCountArgs<ExtArgs>
            result: $Utils.Optional<TourDateCountAggregateOutputType> | number
          }
        }
      }
      BreadGood: {
        payload: Prisma.$BreadGoodPayload<ExtArgs>
        fields: Prisma.BreadGoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BreadGoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadGoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BreadGoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadGoodPayload>
          }
          findFirst: {
            args: Prisma.BreadGoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadGoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BreadGoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadGoodPayload>
          }
          findMany: {
            args: Prisma.BreadGoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadGoodPayload>[]
          }
          create: {
            args: Prisma.BreadGoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadGoodPayload>
          }
          createMany: {
            args: Prisma.BreadGoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BreadGoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadGoodPayload>[]
          }
          delete: {
            args: Prisma.BreadGoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadGoodPayload>
          }
          update: {
            args: Prisma.BreadGoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadGoodPayload>
          }
          deleteMany: {
            args: Prisma.BreadGoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BreadGoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BreadGoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadGoodPayload>[]
          }
          upsert: {
            args: Prisma.BreadGoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreadGoodPayload>
          }
          aggregate: {
            args: Prisma.BreadGoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBreadGood>
          }
          groupBy: {
            args: Prisma.BreadGoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<BreadGoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.BreadGoodCountArgs<ExtArgs>
            result: $Utils.Optional<BreadGoodCountAggregateOutputType> | number
          }
        }
      }
      MerchProduct: {
        payload: Prisma.$MerchProductPayload<ExtArgs>
        fields: Prisma.MerchProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchProductPayload>
          }
          findFirst: {
            args: Prisma.MerchProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchProductPayload>
          }
          findMany: {
            args: Prisma.MerchProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchProductPayload>[]
          }
          create: {
            args: Prisma.MerchProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchProductPayload>
          }
          createMany: {
            args: Prisma.MerchProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchProductPayload>[]
          }
          delete: {
            args: Prisma.MerchProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchProductPayload>
          }
          update: {
            args: Prisma.MerchProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchProductPayload>
          }
          deleteMany: {
            args: Prisma.MerchProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MerchProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchProductPayload>[]
          }
          upsert: {
            args: Prisma.MerchProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchProductPayload>
          }
          aggregate: {
            args: Prisma.MerchProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchProduct>
          }
          groupBy: {
            args: Prisma.MerchProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchProductCountArgs<ExtArgs>
            result: $Utils.Optional<MerchProductCountAggregateOutputType> | number
          }
        }
      }
      MusicRelease: {
        payload: Prisma.$MusicReleasePayload<ExtArgs>
        fields: Prisma.MusicReleaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicReleaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicReleasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicReleaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicReleasePayload>
          }
          findFirst: {
            args: Prisma.MusicReleaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicReleasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicReleaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicReleasePayload>
          }
          findMany: {
            args: Prisma.MusicReleaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicReleasePayload>[]
          }
          create: {
            args: Prisma.MusicReleaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicReleasePayload>
          }
          createMany: {
            args: Prisma.MusicReleaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MusicReleaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicReleasePayload>[]
          }
          delete: {
            args: Prisma.MusicReleaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicReleasePayload>
          }
          update: {
            args: Prisma.MusicReleaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicReleasePayload>
          }
          deleteMany: {
            args: Prisma.MusicReleaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MusicReleaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MusicReleaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicReleasePayload>[]
          }
          upsert: {
            args: Prisma.MusicReleaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicReleasePayload>
          }
          aggregate: {
            args: Prisma.MusicReleaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusicRelease>
          }
          groupBy: {
            args: Prisma.MusicReleaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicReleaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.MusicReleaseCountArgs<ExtArgs>
            result: $Utils.Optional<MusicReleaseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    storeItem?: StoreItemOmit
    tourDate?: TourDateOmit
    breadGood?: BreadGoodOmit
    merchProduct?: MerchProductOmit
    musicRelease?: MusicReleaseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model StoreItem
   */

  export type AggregateStoreItem = {
    _count: StoreItemCountAggregateOutputType | null
    _avg: StoreItemAvgAggregateOutputType | null
    _sum: StoreItemSumAggregateOutputType | null
    _min: StoreItemMinAggregateOutputType | null
    _max: StoreItemMaxAggregateOutputType | null
  }

  export type StoreItemAvgAggregateOutputType = {
    id: number | null
  }

  export type StoreItemSumAggregateOutputType = {
    id: number | null
  }

  export type StoreItemMinAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    price: string | null
  }

  export type StoreItemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    price: string | null
  }

  export type StoreItemCountAggregateOutputType = {
    id: number
    title: number
    image: number
    price: number
    _all: number
  }


  export type StoreItemAvgAggregateInputType = {
    id?: true
  }

  export type StoreItemSumAggregateInputType = {
    id?: true
  }

  export type StoreItemMinAggregateInputType = {
    id?: true
    title?: true
    image?: true
    price?: true
  }

  export type StoreItemMaxAggregateInputType = {
    id?: true
    title?: true
    image?: true
    price?: true
  }

  export type StoreItemCountAggregateInputType = {
    id?: true
    title?: true
    image?: true
    price?: true
    _all?: true
  }

  export type StoreItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreItem to aggregate.
     */
    where?: StoreItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreItems to fetch.
     */
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreItems
    **/
    _count?: true | StoreItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreItemMaxAggregateInputType
  }

  export type GetStoreItemAggregateType<T extends StoreItemAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreItem[P]>
      : GetScalarType<T[P], AggregateStoreItem[P]>
  }




  export type StoreItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreItemWhereInput
    orderBy?: StoreItemOrderByWithAggregationInput | StoreItemOrderByWithAggregationInput[]
    by: StoreItemScalarFieldEnum[] | StoreItemScalarFieldEnum
    having?: StoreItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreItemCountAggregateInputType | true
    _avg?: StoreItemAvgAggregateInputType
    _sum?: StoreItemSumAggregateInputType
    _min?: StoreItemMinAggregateInputType
    _max?: StoreItemMaxAggregateInputType
  }

  export type StoreItemGroupByOutputType = {
    id: number
    title: string
    image: string
    price: string
    _count: StoreItemCountAggregateOutputType | null
    _avg: StoreItemAvgAggregateOutputType | null
    _sum: StoreItemSumAggregateOutputType | null
    _min: StoreItemMinAggregateOutputType | null
    _max: StoreItemMaxAggregateOutputType | null
  }

  type GetStoreItemGroupByPayload<T extends StoreItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreItemGroupByOutputType[P]>
            : GetScalarType<T[P], StoreItemGroupByOutputType[P]>
        }
      >
    >


  export type StoreItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    price?: boolean
  }, ExtArgs["result"]["storeItem"]>

  export type StoreItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    price?: boolean
  }, ExtArgs["result"]["storeItem"]>

  export type StoreItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    price?: boolean
  }, ExtArgs["result"]["storeItem"]>

  export type StoreItemSelectScalar = {
    id?: boolean
    title?: boolean
    image?: boolean
    price?: boolean
  }

  export type StoreItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "image" | "price", ExtArgs["result"]["storeItem"]>

  export type $StoreItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      image: string
      price: string
    }, ExtArgs["result"]["storeItem"]>
    composites: {}
  }

  type StoreItemGetPayload<S extends boolean | null | undefined | StoreItemDefaultArgs> = $Result.GetResult<Prisma.$StoreItemPayload, S>

  type StoreItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreItemCountAggregateInputType | true
    }

  export interface StoreItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreItem'], meta: { name: 'StoreItem' } }
    /**
     * Find zero or one StoreItem that matches the filter.
     * @param {StoreItemFindUniqueArgs} args - Arguments to find a StoreItem
     * @example
     * // Get one StoreItem
     * const storeItem = await prisma.storeItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreItemFindUniqueArgs>(args: SelectSubset<T, StoreItemFindUniqueArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreItemFindUniqueOrThrowArgs} args - Arguments to find a StoreItem
     * @example
     * // Get one StoreItem
     * const storeItem = await prisma.storeItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreItemFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemFindFirstArgs} args - Arguments to find a StoreItem
     * @example
     * // Get one StoreItem
     * const storeItem = await prisma.storeItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreItemFindFirstArgs>(args?: SelectSubset<T, StoreItemFindFirstArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemFindFirstOrThrowArgs} args - Arguments to find a StoreItem
     * @example
     * // Get one StoreItem
     * const storeItem = await prisma.storeItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreItemFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreItems
     * const storeItems = await prisma.storeItem.findMany()
     * 
     * // Get first 10 StoreItems
     * const storeItems = await prisma.storeItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeItemWithIdOnly = await prisma.storeItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreItemFindManyArgs>(args?: SelectSubset<T, StoreItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreItem.
     * @param {StoreItemCreateArgs} args - Arguments to create a StoreItem.
     * @example
     * // Create one StoreItem
     * const StoreItem = await prisma.storeItem.create({
     *   data: {
     *     // ... data to create a StoreItem
     *   }
     * })
     * 
     */
    create<T extends StoreItemCreateArgs>(args: SelectSubset<T, StoreItemCreateArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreItems.
     * @param {StoreItemCreateManyArgs} args - Arguments to create many StoreItems.
     * @example
     * // Create many StoreItems
     * const storeItem = await prisma.storeItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreItemCreateManyArgs>(args?: SelectSubset<T, StoreItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoreItems and returns the data saved in the database.
     * @param {StoreItemCreateManyAndReturnArgs} args - Arguments to create many StoreItems.
     * @example
     * // Create many StoreItems
     * const storeItem = await prisma.storeItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoreItems and only return the `id`
     * const storeItemWithIdOnly = await prisma.storeItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreItemCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoreItem.
     * @param {StoreItemDeleteArgs} args - Arguments to delete one StoreItem.
     * @example
     * // Delete one StoreItem
     * const StoreItem = await prisma.storeItem.delete({
     *   where: {
     *     // ... filter to delete one StoreItem
     *   }
     * })
     * 
     */
    delete<T extends StoreItemDeleteArgs>(args: SelectSubset<T, StoreItemDeleteArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreItem.
     * @param {StoreItemUpdateArgs} args - Arguments to update one StoreItem.
     * @example
     * // Update one StoreItem
     * const storeItem = await prisma.storeItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreItemUpdateArgs>(args: SelectSubset<T, StoreItemUpdateArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreItems.
     * @param {StoreItemDeleteManyArgs} args - Arguments to filter StoreItems to delete.
     * @example
     * // Delete a few StoreItems
     * const { count } = await prisma.storeItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreItemDeleteManyArgs>(args?: SelectSubset<T, StoreItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreItems
     * const storeItem = await prisma.storeItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreItemUpdateManyArgs>(args: SelectSubset<T, StoreItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreItems and returns the data updated in the database.
     * @param {StoreItemUpdateManyAndReturnArgs} args - Arguments to update many StoreItems.
     * @example
     * // Update many StoreItems
     * const storeItem = await prisma.storeItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoreItems and only return the `id`
     * const storeItemWithIdOnly = await prisma.storeItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoreItemUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoreItem.
     * @param {StoreItemUpsertArgs} args - Arguments to update or create a StoreItem.
     * @example
     * // Update or create a StoreItem
     * const storeItem = await prisma.storeItem.upsert({
     *   create: {
     *     // ... data to create a StoreItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreItem we want to update
     *   }
     * })
     */
    upsert<T extends StoreItemUpsertArgs>(args: SelectSubset<T, StoreItemUpsertArgs<ExtArgs>>): Prisma__StoreItemClient<$Result.GetResult<Prisma.$StoreItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemCountArgs} args - Arguments to filter StoreItems to count.
     * @example
     * // Count the number of StoreItems
     * const count = await prisma.storeItem.count({
     *   where: {
     *     // ... the filter for the StoreItems we want to count
     *   }
     * })
    **/
    count<T extends StoreItemCountArgs>(
      args?: Subset<T, StoreItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreItemAggregateArgs>(args: Subset<T, StoreItemAggregateArgs>): Prisma.PrismaPromise<GetStoreItemAggregateType<T>>

    /**
     * Group by StoreItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreItemGroupByArgs['orderBy'] }
        : { orderBy?: StoreItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreItem model
   */
  readonly fields: StoreItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoreItem model
   */
  interface StoreItemFieldRefs {
    readonly id: FieldRef<"StoreItem", 'Int'>
    readonly title: FieldRef<"StoreItem", 'String'>
    readonly image: FieldRef<"StoreItem", 'String'>
    readonly price: FieldRef<"StoreItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StoreItem findUnique
   */
  export type StoreItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Filter, which StoreItem to fetch.
     */
    where: StoreItemWhereUniqueInput
  }

  /**
   * StoreItem findUniqueOrThrow
   */
  export type StoreItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Filter, which StoreItem to fetch.
     */
    where: StoreItemWhereUniqueInput
  }

  /**
   * StoreItem findFirst
   */
  export type StoreItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Filter, which StoreItem to fetch.
     */
    where?: StoreItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreItems to fetch.
     */
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreItems.
     */
    cursor?: StoreItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreItems.
     */
    distinct?: StoreItemScalarFieldEnum | StoreItemScalarFieldEnum[]
  }

  /**
   * StoreItem findFirstOrThrow
   */
  export type StoreItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Filter, which StoreItem to fetch.
     */
    where?: StoreItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreItems to fetch.
     */
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreItems.
     */
    cursor?: StoreItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreItems.
     */
    distinct?: StoreItemScalarFieldEnum | StoreItemScalarFieldEnum[]
  }

  /**
   * StoreItem findMany
   */
  export type StoreItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Filter, which StoreItems to fetch.
     */
    where?: StoreItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreItems to fetch.
     */
    orderBy?: StoreItemOrderByWithRelationInput | StoreItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreItems.
     */
    cursor?: StoreItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreItems.
     */
    skip?: number
    distinct?: StoreItemScalarFieldEnum | StoreItemScalarFieldEnum[]
  }

  /**
   * StoreItem create
   */
  export type StoreItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * The data needed to create a StoreItem.
     */
    data: XOR<StoreItemCreateInput, StoreItemUncheckedCreateInput>
  }

  /**
   * StoreItem createMany
   */
  export type StoreItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreItems.
     */
    data: StoreItemCreateManyInput | StoreItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreItem createManyAndReturn
   */
  export type StoreItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * The data used to create many StoreItems.
     */
    data: StoreItemCreateManyInput | StoreItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreItem update
   */
  export type StoreItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * The data needed to update a StoreItem.
     */
    data: XOR<StoreItemUpdateInput, StoreItemUncheckedUpdateInput>
    /**
     * Choose, which StoreItem to update.
     */
    where: StoreItemWhereUniqueInput
  }

  /**
   * StoreItem updateMany
   */
  export type StoreItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreItems.
     */
    data: XOR<StoreItemUpdateManyMutationInput, StoreItemUncheckedUpdateManyInput>
    /**
     * Filter which StoreItems to update
     */
    where?: StoreItemWhereInput
    /**
     * Limit how many StoreItems to update.
     */
    limit?: number
  }

  /**
   * StoreItem updateManyAndReturn
   */
  export type StoreItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * The data used to update StoreItems.
     */
    data: XOR<StoreItemUpdateManyMutationInput, StoreItemUncheckedUpdateManyInput>
    /**
     * Filter which StoreItems to update
     */
    where?: StoreItemWhereInput
    /**
     * Limit how many StoreItems to update.
     */
    limit?: number
  }

  /**
   * StoreItem upsert
   */
  export type StoreItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * The filter to search for the StoreItem to update in case it exists.
     */
    where: StoreItemWhereUniqueInput
    /**
     * In case the StoreItem found by the `where` argument doesn't exist, create a new StoreItem with this data.
     */
    create: XOR<StoreItemCreateInput, StoreItemUncheckedCreateInput>
    /**
     * In case the StoreItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreItemUpdateInput, StoreItemUncheckedUpdateInput>
  }

  /**
   * StoreItem delete
   */
  export type StoreItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
    /**
     * Filter which StoreItem to delete.
     */
    where: StoreItemWhereUniqueInput
  }

  /**
   * StoreItem deleteMany
   */
  export type StoreItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreItems to delete
     */
    where?: StoreItemWhereInput
    /**
     * Limit how many StoreItems to delete.
     */
    limit?: number
  }

  /**
   * StoreItem without action
   */
  export type StoreItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreItem
     */
    select?: StoreItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreItem
     */
    omit?: StoreItemOmit<ExtArgs> | null
  }


  /**
   * Model TourDate
   */

  export type AggregateTourDate = {
    _count: TourDateCountAggregateOutputType | null
    _avg: TourDateAvgAggregateOutputType | null
    _sum: TourDateSumAggregateOutputType | null
    _min: TourDateMinAggregateOutputType | null
    _max: TourDateMaxAggregateOutputType | null
  }

  export type TourDateAvgAggregateOutputType = {
    id: number | null
  }

  export type TourDateSumAggregateOutputType = {
    id: number | null
  }

  export type TourDateMinAggregateOutputType = {
    id: number | null
    date: string | null
    venue: string | null
    city: string | null
    link: string | null
    vip: boolean | null
    tickets: boolean | null
  }

  export type TourDateMaxAggregateOutputType = {
    id: number | null
    date: string | null
    venue: string | null
    city: string | null
    link: string | null
    vip: boolean | null
    tickets: boolean | null
  }

  export type TourDateCountAggregateOutputType = {
    id: number
    date: number
    venue: number
    city: number
    link: number
    vip: number
    tickets: number
    _all: number
  }


  export type TourDateAvgAggregateInputType = {
    id?: true
  }

  export type TourDateSumAggregateInputType = {
    id?: true
  }

  export type TourDateMinAggregateInputType = {
    id?: true
    date?: true
    venue?: true
    city?: true
    link?: true
    vip?: true
    tickets?: true
  }

  export type TourDateMaxAggregateInputType = {
    id?: true
    date?: true
    venue?: true
    city?: true
    link?: true
    vip?: true
    tickets?: true
  }

  export type TourDateCountAggregateInputType = {
    id?: true
    date?: true
    venue?: true
    city?: true
    link?: true
    vip?: true
    tickets?: true
    _all?: true
  }

  export type TourDateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourDate to aggregate.
     */
    where?: TourDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourDates to fetch.
     */
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourDates
    **/
    _count?: true | TourDateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourDateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourDateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourDateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourDateMaxAggregateInputType
  }

  export type GetTourDateAggregateType<T extends TourDateAggregateArgs> = {
        [P in keyof T & keyof AggregateTourDate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourDate[P]>
      : GetScalarType<T[P], AggregateTourDate[P]>
  }




  export type TourDateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourDateWhereInput
    orderBy?: TourDateOrderByWithAggregationInput | TourDateOrderByWithAggregationInput[]
    by: TourDateScalarFieldEnum[] | TourDateScalarFieldEnum
    having?: TourDateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourDateCountAggregateInputType | true
    _avg?: TourDateAvgAggregateInputType
    _sum?: TourDateSumAggregateInputType
    _min?: TourDateMinAggregateInputType
    _max?: TourDateMaxAggregateInputType
  }

  export type TourDateGroupByOutputType = {
    id: number
    date: string
    venue: string
    city: string
    link: string
    vip: boolean
    tickets: boolean
    _count: TourDateCountAggregateOutputType | null
    _avg: TourDateAvgAggregateOutputType | null
    _sum: TourDateSumAggregateOutputType | null
    _min: TourDateMinAggregateOutputType | null
    _max: TourDateMaxAggregateOutputType | null
  }

  type GetTourDateGroupByPayload<T extends TourDateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourDateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourDateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourDateGroupByOutputType[P]>
            : GetScalarType<T[P], TourDateGroupByOutputType[P]>
        }
      >
    >


  export type TourDateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    venue?: boolean
    city?: boolean
    link?: boolean
    vip?: boolean
    tickets?: boolean
  }, ExtArgs["result"]["tourDate"]>

  export type TourDateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    venue?: boolean
    city?: boolean
    link?: boolean
    vip?: boolean
    tickets?: boolean
  }, ExtArgs["result"]["tourDate"]>

  export type TourDateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    venue?: boolean
    city?: boolean
    link?: boolean
    vip?: boolean
    tickets?: boolean
  }, ExtArgs["result"]["tourDate"]>

  export type TourDateSelectScalar = {
    id?: boolean
    date?: boolean
    venue?: boolean
    city?: boolean
    link?: boolean
    vip?: boolean
    tickets?: boolean
  }

  export type TourDateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "venue" | "city" | "link" | "vip" | "tickets", ExtArgs["result"]["tourDate"]>

  export type $TourDatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourDate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string
      venue: string
      city: string
      link: string
      vip: boolean
      tickets: boolean
    }, ExtArgs["result"]["tourDate"]>
    composites: {}
  }

  type TourDateGetPayload<S extends boolean | null | undefined | TourDateDefaultArgs> = $Result.GetResult<Prisma.$TourDatePayload, S>

  type TourDateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourDateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourDateCountAggregateInputType | true
    }

  export interface TourDateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourDate'], meta: { name: 'TourDate' } }
    /**
     * Find zero or one TourDate that matches the filter.
     * @param {TourDateFindUniqueArgs} args - Arguments to find a TourDate
     * @example
     * // Get one TourDate
     * const tourDate = await prisma.tourDate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourDateFindUniqueArgs>(args: SelectSubset<T, TourDateFindUniqueArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourDate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourDateFindUniqueOrThrowArgs} args - Arguments to find a TourDate
     * @example
     * // Get one TourDate
     * const tourDate = await prisma.tourDate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourDateFindUniqueOrThrowArgs>(args: SelectSubset<T, TourDateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourDate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateFindFirstArgs} args - Arguments to find a TourDate
     * @example
     * // Get one TourDate
     * const tourDate = await prisma.tourDate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourDateFindFirstArgs>(args?: SelectSubset<T, TourDateFindFirstArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourDate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateFindFirstOrThrowArgs} args - Arguments to find a TourDate
     * @example
     * // Get one TourDate
     * const tourDate = await prisma.tourDate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourDateFindFirstOrThrowArgs>(args?: SelectSubset<T, TourDateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourDates
     * const tourDates = await prisma.tourDate.findMany()
     * 
     * // Get first 10 TourDates
     * const tourDates = await prisma.tourDate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourDateWithIdOnly = await prisma.tourDate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourDateFindManyArgs>(args?: SelectSubset<T, TourDateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourDate.
     * @param {TourDateCreateArgs} args - Arguments to create a TourDate.
     * @example
     * // Create one TourDate
     * const TourDate = await prisma.tourDate.create({
     *   data: {
     *     // ... data to create a TourDate
     *   }
     * })
     * 
     */
    create<T extends TourDateCreateArgs>(args: SelectSubset<T, TourDateCreateArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourDates.
     * @param {TourDateCreateManyArgs} args - Arguments to create many TourDates.
     * @example
     * // Create many TourDates
     * const tourDate = await prisma.tourDate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourDateCreateManyArgs>(args?: SelectSubset<T, TourDateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourDates and returns the data saved in the database.
     * @param {TourDateCreateManyAndReturnArgs} args - Arguments to create many TourDates.
     * @example
     * // Create many TourDates
     * const tourDate = await prisma.tourDate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourDates and only return the `id`
     * const tourDateWithIdOnly = await prisma.tourDate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourDateCreateManyAndReturnArgs>(args?: SelectSubset<T, TourDateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourDate.
     * @param {TourDateDeleteArgs} args - Arguments to delete one TourDate.
     * @example
     * // Delete one TourDate
     * const TourDate = await prisma.tourDate.delete({
     *   where: {
     *     // ... filter to delete one TourDate
     *   }
     * })
     * 
     */
    delete<T extends TourDateDeleteArgs>(args: SelectSubset<T, TourDateDeleteArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourDate.
     * @param {TourDateUpdateArgs} args - Arguments to update one TourDate.
     * @example
     * // Update one TourDate
     * const tourDate = await prisma.tourDate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourDateUpdateArgs>(args: SelectSubset<T, TourDateUpdateArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourDates.
     * @param {TourDateDeleteManyArgs} args - Arguments to filter TourDates to delete.
     * @example
     * // Delete a few TourDates
     * const { count } = await prisma.tourDate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourDateDeleteManyArgs>(args?: SelectSubset<T, TourDateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourDates
     * const tourDate = await prisma.tourDate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourDateUpdateManyArgs>(args: SelectSubset<T, TourDateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourDates and returns the data updated in the database.
     * @param {TourDateUpdateManyAndReturnArgs} args - Arguments to update many TourDates.
     * @example
     * // Update many TourDates
     * const tourDate = await prisma.tourDate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourDates and only return the `id`
     * const tourDateWithIdOnly = await prisma.tourDate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourDateUpdateManyAndReturnArgs>(args: SelectSubset<T, TourDateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourDate.
     * @param {TourDateUpsertArgs} args - Arguments to update or create a TourDate.
     * @example
     * // Update or create a TourDate
     * const tourDate = await prisma.tourDate.upsert({
     *   create: {
     *     // ... data to create a TourDate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourDate we want to update
     *   }
     * })
     */
    upsert<T extends TourDateUpsertArgs>(args: SelectSubset<T, TourDateUpsertArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateCountArgs} args - Arguments to filter TourDates to count.
     * @example
     * // Count the number of TourDates
     * const count = await prisma.tourDate.count({
     *   where: {
     *     // ... the filter for the TourDates we want to count
     *   }
     * })
    **/
    count<T extends TourDateCountArgs>(
      args?: Subset<T, TourDateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourDateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourDateAggregateArgs>(args: Subset<T, TourDateAggregateArgs>): Prisma.PrismaPromise<GetTourDateAggregateType<T>>

    /**
     * Group by TourDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourDateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourDateGroupByArgs['orderBy'] }
        : { orderBy?: TourDateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourDateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourDate model
   */
  readonly fields: TourDateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourDate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourDateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourDate model
   */
  interface TourDateFieldRefs {
    readonly id: FieldRef<"TourDate", 'Int'>
    readonly date: FieldRef<"TourDate", 'String'>
    readonly venue: FieldRef<"TourDate", 'String'>
    readonly city: FieldRef<"TourDate", 'String'>
    readonly link: FieldRef<"TourDate", 'String'>
    readonly vip: FieldRef<"TourDate", 'Boolean'>
    readonly tickets: FieldRef<"TourDate", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TourDate findUnique
   */
  export type TourDateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Filter, which TourDate to fetch.
     */
    where: TourDateWhereUniqueInput
  }

  /**
   * TourDate findUniqueOrThrow
   */
  export type TourDateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Filter, which TourDate to fetch.
     */
    where: TourDateWhereUniqueInput
  }

  /**
   * TourDate findFirst
   */
  export type TourDateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Filter, which TourDate to fetch.
     */
    where?: TourDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourDates to fetch.
     */
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourDates.
     */
    cursor?: TourDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourDates.
     */
    distinct?: TourDateScalarFieldEnum | TourDateScalarFieldEnum[]
  }

  /**
   * TourDate findFirstOrThrow
   */
  export type TourDateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Filter, which TourDate to fetch.
     */
    where?: TourDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourDates to fetch.
     */
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourDates.
     */
    cursor?: TourDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourDates.
     */
    distinct?: TourDateScalarFieldEnum | TourDateScalarFieldEnum[]
  }

  /**
   * TourDate findMany
   */
  export type TourDateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Filter, which TourDates to fetch.
     */
    where?: TourDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourDates to fetch.
     */
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourDates.
     */
    cursor?: TourDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourDates.
     */
    skip?: number
    distinct?: TourDateScalarFieldEnum | TourDateScalarFieldEnum[]
  }

  /**
   * TourDate create
   */
  export type TourDateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * The data needed to create a TourDate.
     */
    data: XOR<TourDateCreateInput, TourDateUncheckedCreateInput>
  }

  /**
   * TourDate createMany
   */
  export type TourDateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourDates.
     */
    data: TourDateCreateManyInput | TourDateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourDate createManyAndReturn
   */
  export type TourDateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * The data used to create many TourDates.
     */
    data: TourDateCreateManyInput | TourDateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourDate update
   */
  export type TourDateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * The data needed to update a TourDate.
     */
    data: XOR<TourDateUpdateInput, TourDateUncheckedUpdateInput>
    /**
     * Choose, which TourDate to update.
     */
    where: TourDateWhereUniqueInput
  }

  /**
   * TourDate updateMany
   */
  export type TourDateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourDates.
     */
    data: XOR<TourDateUpdateManyMutationInput, TourDateUncheckedUpdateManyInput>
    /**
     * Filter which TourDates to update
     */
    where?: TourDateWhereInput
    /**
     * Limit how many TourDates to update.
     */
    limit?: number
  }

  /**
   * TourDate updateManyAndReturn
   */
  export type TourDateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * The data used to update TourDates.
     */
    data: XOR<TourDateUpdateManyMutationInput, TourDateUncheckedUpdateManyInput>
    /**
     * Filter which TourDates to update
     */
    where?: TourDateWhereInput
    /**
     * Limit how many TourDates to update.
     */
    limit?: number
  }

  /**
   * TourDate upsert
   */
  export type TourDateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * The filter to search for the TourDate to update in case it exists.
     */
    where: TourDateWhereUniqueInput
    /**
     * In case the TourDate found by the `where` argument doesn't exist, create a new TourDate with this data.
     */
    create: XOR<TourDateCreateInput, TourDateUncheckedCreateInput>
    /**
     * In case the TourDate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourDateUpdateInput, TourDateUncheckedUpdateInput>
  }

  /**
   * TourDate delete
   */
  export type TourDateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Filter which TourDate to delete.
     */
    where: TourDateWhereUniqueInput
  }

  /**
   * TourDate deleteMany
   */
  export type TourDateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourDates to delete
     */
    where?: TourDateWhereInput
    /**
     * Limit how many TourDates to delete.
     */
    limit?: number
  }

  /**
   * TourDate without action
   */
  export type TourDateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
  }


  /**
   * Model BreadGood
   */

  export type AggregateBreadGood = {
    _count: BreadGoodCountAggregateOutputType | null
    _avg: BreadGoodAvgAggregateOutputType | null
    _sum: BreadGoodSumAggregateOutputType | null
    _min: BreadGoodMinAggregateOutputType | null
    _max: BreadGoodMaxAggregateOutputType | null
  }

  export type BreadGoodAvgAggregateOutputType = {
    id: number | null
  }

  export type BreadGoodSumAggregateOutputType = {
    id: number | null
  }

  export type BreadGoodMinAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    price: string | null
    link: string | null
  }

  export type BreadGoodMaxAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    price: string | null
    link: string | null
  }

  export type BreadGoodCountAggregateOutputType = {
    id: number
    title: number
    image: number
    price: number
    link: number
    _all: number
  }


  export type BreadGoodAvgAggregateInputType = {
    id?: true
  }

  export type BreadGoodSumAggregateInputType = {
    id?: true
  }

  export type BreadGoodMinAggregateInputType = {
    id?: true
    title?: true
    image?: true
    price?: true
    link?: true
  }

  export type BreadGoodMaxAggregateInputType = {
    id?: true
    title?: true
    image?: true
    price?: true
    link?: true
  }

  export type BreadGoodCountAggregateInputType = {
    id?: true
    title?: true
    image?: true
    price?: true
    link?: true
    _all?: true
  }

  export type BreadGoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BreadGood to aggregate.
     */
    where?: BreadGoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BreadGoods to fetch.
     */
    orderBy?: BreadGoodOrderByWithRelationInput | BreadGoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BreadGoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BreadGoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BreadGoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BreadGoods
    **/
    _count?: true | BreadGoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BreadGoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BreadGoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BreadGoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BreadGoodMaxAggregateInputType
  }

  export type GetBreadGoodAggregateType<T extends BreadGoodAggregateArgs> = {
        [P in keyof T & keyof AggregateBreadGood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBreadGood[P]>
      : GetScalarType<T[P], AggregateBreadGood[P]>
  }




  export type BreadGoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreadGoodWhereInput
    orderBy?: BreadGoodOrderByWithAggregationInput | BreadGoodOrderByWithAggregationInput[]
    by: BreadGoodScalarFieldEnum[] | BreadGoodScalarFieldEnum
    having?: BreadGoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BreadGoodCountAggregateInputType | true
    _avg?: BreadGoodAvgAggregateInputType
    _sum?: BreadGoodSumAggregateInputType
    _min?: BreadGoodMinAggregateInputType
    _max?: BreadGoodMaxAggregateInputType
  }

  export type BreadGoodGroupByOutputType = {
    id: number
    title: string
    image: string
    price: string
    link: string
    _count: BreadGoodCountAggregateOutputType | null
    _avg: BreadGoodAvgAggregateOutputType | null
    _sum: BreadGoodSumAggregateOutputType | null
    _min: BreadGoodMinAggregateOutputType | null
    _max: BreadGoodMaxAggregateOutputType | null
  }

  type GetBreadGoodGroupByPayload<T extends BreadGoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BreadGoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BreadGoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BreadGoodGroupByOutputType[P]>
            : GetScalarType<T[P], BreadGoodGroupByOutputType[P]>
        }
      >
    >


  export type BreadGoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    price?: boolean
    link?: boolean
  }, ExtArgs["result"]["breadGood"]>

  export type BreadGoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    price?: boolean
    link?: boolean
  }, ExtArgs["result"]["breadGood"]>

  export type BreadGoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    price?: boolean
    link?: boolean
  }, ExtArgs["result"]["breadGood"]>

  export type BreadGoodSelectScalar = {
    id?: boolean
    title?: boolean
    image?: boolean
    price?: boolean
    link?: boolean
  }

  export type BreadGoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "image" | "price" | "link", ExtArgs["result"]["breadGood"]>

  export type $BreadGoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BreadGood"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      image: string
      price: string
      link: string
    }, ExtArgs["result"]["breadGood"]>
    composites: {}
  }

  type BreadGoodGetPayload<S extends boolean | null | undefined | BreadGoodDefaultArgs> = $Result.GetResult<Prisma.$BreadGoodPayload, S>

  type BreadGoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BreadGoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BreadGoodCountAggregateInputType | true
    }

  export interface BreadGoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BreadGood'], meta: { name: 'BreadGood' } }
    /**
     * Find zero or one BreadGood that matches the filter.
     * @param {BreadGoodFindUniqueArgs} args - Arguments to find a BreadGood
     * @example
     * // Get one BreadGood
     * const breadGood = await prisma.breadGood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BreadGoodFindUniqueArgs>(args: SelectSubset<T, BreadGoodFindUniqueArgs<ExtArgs>>): Prisma__BreadGoodClient<$Result.GetResult<Prisma.$BreadGoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BreadGood that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BreadGoodFindUniqueOrThrowArgs} args - Arguments to find a BreadGood
     * @example
     * // Get one BreadGood
     * const breadGood = await prisma.breadGood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BreadGoodFindUniqueOrThrowArgs>(args: SelectSubset<T, BreadGoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BreadGoodClient<$Result.GetResult<Prisma.$BreadGoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BreadGood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadGoodFindFirstArgs} args - Arguments to find a BreadGood
     * @example
     * // Get one BreadGood
     * const breadGood = await prisma.breadGood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BreadGoodFindFirstArgs>(args?: SelectSubset<T, BreadGoodFindFirstArgs<ExtArgs>>): Prisma__BreadGoodClient<$Result.GetResult<Prisma.$BreadGoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BreadGood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadGoodFindFirstOrThrowArgs} args - Arguments to find a BreadGood
     * @example
     * // Get one BreadGood
     * const breadGood = await prisma.breadGood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BreadGoodFindFirstOrThrowArgs>(args?: SelectSubset<T, BreadGoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__BreadGoodClient<$Result.GetResult<Prisma.$BreadGoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BreadGoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadGoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BreadGoods
     * const breadGoods = await prisma.breadGood.findMany()
     * 
     * // Get first 10 BreadGoods
     * const breadGoods = await prisma.breadGood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const breadGoodWithIdOnly = await prisma.breadGood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BreadGoodFindManyArgs>(args?: SelectSubset<T, BreadGoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreadGoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BreadGood.
     * @param {BreadGoodCreateArgs} args - Arguments to create a BreadGood.
     * @example
     * // Create one BreadGood
     * const BreadGood = await prisma.breadGood.create({
     *   data: {
     *     // ... data to create a BreadGood
     *   }
     * })
     * 
     */
    create<T extends BreadGoodCreateArgs>(args: SelectSubset<T, BreadGoodCreateArgs<ExtArgs>>): Prisma__BreadGoodClient<$Result.GetResult<Prisma.$BreadGoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BreadGoods.
     * @param {BreadGoodCreateManyArgs} args - Arguments to create many BreadGoods.
     * @example
     * // Create many BreadGoods
     * const breadGood = await prisma.breadGood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BreadGoodCreateManyArgs>(args?: SelectSubset<T, BreadGoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BreadGoods and returns the data saved in the database.
     * @param {BreadGoodCreateManyAndReturnArgs} args - Arguments to create many BreadGoods.
     * @example
     * // Create many BreadGoods
     * const breadGood = await prisma.breadGood.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BreadGoods and only return the `id`
     * const breadGoodWithIdOnly = await prisma.breadGood.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BreadGoodCreateManyAndReturnArgs>(args?: SelectSubset<T, BreadGoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreadGoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BreadGood.
     * @param {BreadGoodDeleteArgs} args - Arguments to delete one BreadGood.
     * @example
     * // Delete one BreadGood
     * const BreadGood = await prisma.breadGood.delete({
     *   where: {
     *     // ... filter to delete one BreadGood
     *   }
     * })
     * 
     */
    delete<T extends BreadGoodDeleteArgs>(args: SelectSubset<T, BreadGoodDeleteArgs<ExtArgs>>): Prisma__BreadGoodClient<$Result.GetResult<Prisma.$BreadGoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BreadGood.
     * @param {BreadGoodUpdateArgs} args - Arguments to update one BreadGood.
     * @example
     * // Update one BreadGood
     * const breadGood = await prisma.breadGood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BreadGoodUpdateArgs>(args: SelectSubset<T, BreadGoodUpdateArgs<ExtArgs>>): Prisma__BreadGoodClient<$Result.GetResult<Prisma.$BreadGoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BreadGoods.
     * @param {BreadGoodDeleteManyArgs} args - Arguments to filter BreadGoods to delete.
     * @example
     * // Delete a few BreadGoods
     * const { count } = await prisma.breadGood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BreadGoodDeleteManyArgs>(args?: SelectSubset<T, BreadGoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BreadGoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadGoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BreadGoods
     * const breadGood = await prisma.breadGood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BreadGoodUpdateManyArgs>(args: SelectSubset<T, BreadGoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BreadGoods and returns the data updated in the database.
     * @param {BreadGoodUpdateManyAndReturnArgs} args - Arguments to update many BreadGoods.
     * @example
     * // Update many BreadGoods
     * const breadGood = await prisma.breadGood.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BreadGoods and only return the `id`
     * const breadGoodWithIdOnly = await prisma.breadGood.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BreadGoodUpdateManyAndReturnArgs>(args: SelectSubset<T, BreadGoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreadGoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BreadGood.
     * @param {BreadGoodUpsertArgs} args - Arguments to update or create a BreadGood.
     * @example
     * // Update or create a BreadGood
     * const breadGood = await prisma.breadGood.upsert({
     *   create: {
     *     // ... data to create a BreadGood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BreadGood we want to update
     *   }
     * })
     */
    upsert<T extends BreadGoodUpsertArgs>(args: SelectSubset<T, BreadGoodUpsertArgs<ExtArgs>>): Prisma__BreadGoodClient<$Result.GetResult<Prisma.$BreadGoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BreadGoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadGoodCountArgs} args - Arguments to filter BreadGoods to count.
     * @example
     * // Count the number of BreadGoods
     * const count = await prisma.breadGood.count({
     *   where: {
     *     // ... the filter for the BreadGoods we want to count
     *   }
     * })
    **/
    count<T extends BreadGoodCountArgs>(
      args?: Subset<T, BreadGoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BreadGoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BreadGood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadGoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BreadGoodAggregateArgs>(args: Subset<T, BreadGoodAggregateArgs>): Prisma.PrismaPromise<GetBreadGoodAggregateType<T>>

    /**
     * Group by BreadGood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreadGoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BreadGoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BreadGoodGroupByArgs['orderBy'] }
        : { orderBy?: BreadGoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BreadGoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreadGoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BreadGood model
   */
  readonly fields: BreadGoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BreadGood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BreadGoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BreadGood model
   */
  interface BreadGoodFieldRefs {
    readonly id: FieldRef<"BreadGood", 'Int'>
    readonly title: FieldRef<"BreadGood", 'String'>
    readonly image: FieldRef<"BreadGood", 'String'>
    readonly price: FieldRef<"BreadGood", 'String'>
    readonly link: FieldRef<"BreadGood", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BreadGood findUnique
   */
  export type BreadGoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreadGood
     */
    select?: BreadGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreadGood
     */
    omit?: BreadGoodOmit<ExtArgs> | null
    /**
     * Filter, which BreadGood to fetch.
     */
    where: BreadGoodWhereUniqueInput
  }

  /**
   * BreadGood findUniqueOrThrow
   */
  export type BreadGoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreadGood
     */
    select?: BreadGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreadGood
     */
    omit?: BreadGoodOmit<ExtArgs> | null
    /**
     * Filter, which BreadGood to fetch.
     */
    where: BreadGoodWhereUniqueInput
  }

  /**
   * BreadGood findFirst
   */
  export type BreadGoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreadGood
     */
    select?: BreadGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreadGood
     */
    omit?: BreadGoodOmit<ExtArgs> | null
    /**
     * Filter, which BreadGood to fetch.
     */
    where?: BreadGoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BreadGoods to fetch.
     */
    orderBy?: BreadGoodOrderByWithRelationInput | BreadGoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BreadGoods.
     */
    cursor?: BreadGoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BreadGoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BreadGoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BreadGoods.
     */
    distinct?: BreadGoodScalarFieldEnum | BreadGoodScalarFieldEnum[]
  }

  /**
   * BreadGood findFirstOrThrow
   */
  export type BreadGoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreadGood
     */
    select?: BreadGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreadGood
     */
    omit?: BreadGoodOmit<ExtArgs> | null
    /**
     * Filter, which BreadGood to fetch.
     */
    where?: BreadGoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BreadGoods to fetch.
     */
    orderBy?: BreadGoodOrderByWithRelationInput | BreadGoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BreadGoods.
     */
    cursor?: BreadGoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BreadGoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BreadGoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BreadGoods.
     */
    distinct?: BreadGoodScalarFieldEnum | BreadGoodScalarFieldEnum[]
  }

  /**
   * BreadGood findMany
   */
  export type BreadGoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreadGood
     */
    select?: BreadGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreadGood
     */
    omit?: BreadGoodOmit<ExtArgs> | null
    /**
     * Filter, which BreadGoods to fetch.
     */
    where?: BreadGoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BreadGoods to fetch.
     */
    orderBy?: BreadGoodOrderByWithRelationInput | BreadGoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BreadGoods.
     */
    cursor?: BreadGoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BreadGoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BreadGoods.
     */
    skip?: number
    distinct?: BreadGoodScalarFieldEnum | BreadGoodScalarFieldEnum[]
  }

  /**
   * BreadGood create
   */
  export type BreadGoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreadGood
     */
    select?: BreadGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreadGood
     */
    omit?: BreadGoodOmit<ExtArgs> | null
    /**
     * The data needed to create a BreadGood.
     */
    data: XOR<BreadGoodCreateInput, BreadGoodUncheckedCreateInput>
  }

  /**
   * BreadGood createMany
   */
  export type BreadGoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BreadGoods.
     */
    data: BreadGoodCreateManyInput | BreadGoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BreadGood createManyAndReturn
   */
  export type BreadGoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreadGood
     */
    select?: BreadGoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BreadGood
     */
    omit?: BreadGoodOmit<ExtArgs> | null
    /**
     * The data used to create many BreadGoods.
     */
    data: BreadGoodCreateManyInput | BreadGoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BreadGood update
   */
  export type BreadGoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreadGood
     */
    select?: BreadGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreadGood
     */
    omit?: BreadGoodOmit<ExtArgs> | null
    /**
     * The data needed to update a BreadGood.
     */
    data: XOR<BreadGoodUpdateInput, BreadGoodUncheckedUpdateInput>
    /**
     * Choose, which BreadGood to update.
     */
    where: BreadGoodWhereUniqueInput
  }

  /**
   * BreadGood updateMany
   */
  export type BreadGoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BreadGoods.
     */
    data: XOR<BreadGoodUpdateManyMutationInput, BreadGoodUncheckedUpdateManyInput>
    /**
     * Filter which BreadGoods to update
     */
    where?: BreadGoodWhereInput
    /**
     * Limit how many BreadGoods to update.
     */
    limit?: number
  }

  /**
   * BreadGood updateManyAndReturn
   */
  export type BreadGoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreadGood
     */
    select?: BreadGoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BreadGood
     */
    omit?: BreadGoodOmit<ExtArgs> | null
    /**
     * The data used to update BreadGoods.
     */
    data: XOR<BreadGoodUpdateManyMutationInput, BreadGoodUncheckedUpdateManyInput>
    /**
     * Filter which BreadGoods to update
     */
    where?: BreadGoodWhereInput
    /**
     * Limit how many BreadGoods to update.
     */
    limit?: number
  }

  /**
   * BreadGood upsert
   */
  export type BreadGoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreadGood
     */
    select?: BreadGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreadGood
     */
    omit?: BreadGoodOmit<ExtArgs> | null
    /**
     * The filter to search for the BreadGood to update in case it exists.
     */
    where: BreadGoodWhereUniqueInput
    /**
     * In case the BreadGood found by the `where` argument doesn't exist, create a new BreadGood with this data.
     */
    create: XOR<BreadGoodCreateInput, BreadGoodUncheckedCreateInput>
    /**
     * In case the BreadGood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BreadGoodUpdateInput, BreadGoodUncheckedUpdateInput>
  }

  /**
   * BreadGood delete
   */
  export type BreadGoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreadGood
     */
    select?: BreadGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreadGood
     */
    omit?: BreadGoodOmit<ExtArgs> | null
    /**
     * Filter which BreadGood to delete.
     */
    where: BreadGoodWhereUniqueInput
  }

  /**
   * BreadGood deleteMany
   */
  export type BreadGoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BreadGoods to delete
     */
    where?: BreadGoodWhereInput
    /**
     * Limit how many BreadGoods to delete.
     */
    limit?: number
  }

  /**
   * BreadGood without action
   */
  export type BreadGoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreadGood
     */
    select?: BreadGoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreadGood
     */
    omit?: BreadGoodOmit<ExtArgs> | null
  }


  /**
   * Model MerchProduct
   */

  export type AggregateMerchProduct = {
    _count: MerchProductCountAggregateOutputType | null
    _avg: MerchProductAvgAggregateOutputType | null
    _sum: MerchProductSumAggregateOutputType | null
    _min: MerchProductMinAggregateOutputType | null
    _max: MerchProductMaxAggregateOutputType | null
  }

  export type MerchProductAvgAggregateOutputType = {
    id: number | null
  }

  export type MerchProductSumAggregateOutputType = {
    id: number | null
  }

  export type MerchProductMinAggregateOutputType = {
    id: number | null
    title: string | null
    price: string | null
    image: string | null
    link: string | null
  }

  export type MerchProductMaxAggregateOutputType = {
    id: number | null
    title: string | null
    price: string | null
    image: string | null
    link: string | null
  }

  export type MerchProductCountAggregateOutputType = {
    id: number
    title: number
    price: number
    image: number
    link: number
    _all: number
  }


  export type MerchProductAvgAggregateInputType = {
    id?: true
  }

  export type MerchProductSumAggregateInputType = {
    id?: true
  }

  export type MerchProductMinAggregateInputType = {
    id?: true
    title?: true
    price?: true
    image?: true
    link?: true
  }

  export type MerchProductMaxAggregateInputType = {
    id?: true
    title?: true
    price?: true
    image?: true
    link?: true
  }

  export type MerchProductCountAggregateInputType = {
    id?: true
    title?: true
    price?: true
    image?: true
    link?: true
    _all?: true
  }

  export type MerchProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MerchProduct to aggregate.
     */
    where?: MerchProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchProducts to fetch.
     */
    orderBy?: MerchProductOrderByWithRelationInput | MerchProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MerchProducts
    **/
    _count?: true | MerchProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerchProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerchProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchProductMaxAggregateInputType
  }

  export type GetMerchProductAggregateType<T extends MerchProductAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchProduct[P]>
      : GetScalarType<T[P], AggregateMerchProduct[P]>
  }




  export type MerchProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchProductWhereInput
    orderBy?: MerchProductOrderByWithAggregationInput | MerchProductOrderByWithAggregationInput[]
    by: MerchProductScalarFieldEnum[] | MerchProductScalarFieldEnum
    having?: MerchProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchProductCountAggregateInputType | true
    _avg?: MerchProductAvgAggregateInputType
    _sum?: MerchProductSumAggregateInputType
    _min?: MerchProductMinAggregateInputType
    _max?: MerchProductMaxAggregateInputType
  }

  export type MerchProductGroupByOutputType = {
    id: number
    title: string
    price: string
    image: string
    link: string
    _count: MerchProductCountAggregateOutputType | null
    _avg: MerchProductAvgAggregateOutputType | null
    _sum: MerchProductSumAggregateOutputType | null
    _min: MerchProductMinAggregateOutputType | null
    _max: MerchProductMaxAggregateOutputType | null
  }

  type GetMerchProductGroupByPayload<T extends MerchProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchProductGroupByOutputType[P]>
            : GetScalarType<T[P], MerchProductGroupByOutputType[P]>
        }
      >
    >


  export type MerchProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    image?: boolean
    link?: boolean
  }, ExtArgs["result"]["merchProduct"]>

  export type MerchProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    image?: boolean
    link?: boolean
  }, ExtArgs["result"]["merchProduct"]>

  export type MerchProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    image?: boolean
    link?: boolean
  }, ExtArgs["result"]["merchProduct"]>

  export type MerchProductSelectScalar = {
    id?: boolean
    title?: boolean
    price?: boolean
    image?: boolean
    link?: boolean
  }

  export type MerchProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "price" | "image" | "link", ExtArgs["result"]["merchProduct"]>

  export type $MerchProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MerchProduct"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      price: string
      image: string
      link: string
    }, ExtArgs["result"]["merchProduct"]>
    composites: {}
  }

  type MerchProductGetPayload<S extends boolean | null | undefined | MerchProductDefaultArgs> = $Result.GetResult<Prisma.$MerchProductPayload, S>

  type MerchProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MerchProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MerchProductCountAggregateInputType | true
    }

  export interface MerchProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MerchProduct'], meta: { name: 'MerchProduct' } }
    /**
     * Find zero or one MerchProduct that matches the filter.
     * @param {MerchProductFindUniqueArgs} args - Arguments to find a MerchProduct
     * @example
     * // Get one MerchProduct
     * const merchProduct = await prisma.merchProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchProductFindUniqueArgs>(args: SelectSubset<T, MerchProductFindUniqueArgs<ExtArgs>>): Prisma__MerchProductClient<$Result.GetResult<Prisma.$MerchProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MerchProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MerchProductFindUniqueOrThrowArgs} args - Arguments to find a MerchProduct
     * @example
     * // Get one MerchProduct
     * const merchProduct = await prisma.merchProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchProductFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchProductClient<$Result.GetResult<Prisma.$MerchProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MerchProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchProductFindFirstArgs} args - Arguments to find a MerchProduct
     * @example
     * // Get one MerchProduct
     * const merchProduct = await prisma.merchProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchProductFindFirstArgs>(args?: SelectSubset<T, MerchProductFindFirstArgs<ExtArgs>>): Prisma__MerchProductClient<$Result.GetResult<Prisma.$MerchProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MerchProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchProductFindFirstOrThrowArgs} args - Arguments to find a MerchProduct
     * @example
     * // Get one MerchProduct
     * const merchProduct = await prisma.merchProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchProductFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchProductClient<$Result.GetResult<Prisma.$MerchProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MerchProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MerchProducts
     * const merchProducts = await prisma.merchProduct.findMany()
     * 
     * // Get first 10 MerchProducts
     * const merchProducts = await prisma.merchProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchProductWithIdOnly = await prisma.merchProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchProductFindManyArgs>(args?: SelectSubset<T, MerchProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MerchProduct.
     * @param {MerchProductCreateArgs} args - Arguments to create a MerchProduct.
     * @example
     * // Create one MerchProduct
     * const MerchProduct = await prisma.merchProduct.create({
     *   data: {
     *     // ... data to create a MerchProduct
     *   }
     * })
     * 
     */
    create<T extends MerchProductCreateArgs>(args: SelectSubset<T, MerchProductCreateArgs<ExtArgs>>): Prisma__MerchProductClient<$Result.GetResult<Prisma.$MerchProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MerchProducts.
     * @param {MerchProductCreateManyArgs} args - Arguments to create many MerchProducts.
     * @example
     * // Create many MerchProducts
     * const merchProduct = await prisma.merchProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchProductCreateManyArgs>(args?: SelectSubset<T, MerchProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MerchProducts and returns the data saved in the database.
     * @param {MerchProductCreateManyAndReturnArgs} args - Arguments to create many MerchProducts.
     * @example
     * // Create many MerchProducts
     * const merchProduct = await prisma.merchProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MerchProducts and only return the `id`
     * const merchProductWithIdOnly = await prisma.merchProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchProductCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MerchProduct.
     * @param {MerchProductDeleteArgs} args - Arguments to delete one MerchProduct.
     * @example
     * // Delete one MerchProduct
     * const MerchProduct = await prisma.merchProduct.delete({
     *   where: {
     *     // ... filter to delete one MerchProduct
     *   }
     * })
     * 
     */
    delete<T extends MerchProductDeleteArgs>(args: SelectSubset<T, MerchProductDeleteArgs<ExtArgs>>): Prisma__MerchProductClient<$Result.GetResult<Prisma.$MerchProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MerchProduct.
     * @param {MerchProductUpdateArgs} args - Arguments to update one MerchProduct.
     * @example
     * // Update one MerchProduct
     * const merchProduct = await prisma.merchProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchProductUpdateArgs>(args: SelectSubset<T, MerchProductUpdateArgs<ExtArgs>>): Prisma__MerchProductClient<$Result.GetResult<Prisma.$MerchProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MerchProducts.
     * @param {MerchProductDeleteManyArgs} args - Arguments to filter MerchProducts to delete.
     * @example
     * // Delete a few MerchProducts
     * const { count } = await prisma.merchProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchProductDeleteManyArgs>(args?: SelectSubset<T, MerchProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MerchProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MerchProducts
     * const merchProduct = await prisma.merchProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchProductUpdateManyArgs>(args: SelectSubset<T, MerchProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MerchProducts and returns the data updated in the database.
     * @param {MerchProductUpdateManyAndReturnArgs} args - Arguments to update many MerchProducts.
     * @example
     * // Update many MerchProducts
     * const merchProduct = await prisma.merchProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MerchProducts and only return the `id`
     * const merchProductWithIdOnly = await prisma.merchProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MerchProductUpdateManyAndReturnArgs>(args: SelectSubset<T, MerchProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MerchProduct.
     * @param {MerchProductUpsertArgs} args - Arguments to update or create a MerchProduct.
     * @example
     * // Update or create a MerchProduct
     * const merchProduct = await prisma.merchProduct.upsert({
     *   create: {
     *     // ... data to create a MerchProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MerchProduct we want to update
     *   }
     * })
     */
    upsert<T extends MerchProductUpsertArgs>(args: SelectSubset<T, MerchProductUpsertArgs<ExtArgs>>): Prisma__MerchProductClient<$Result.GetResult<Prisma.$MerchProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MerchProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchProductCountArgs} args - Arguments to filter MerchProducts to count.
     * @example
     * // Count the number of MerchProducts
     * const count = await prisma.merchProduct.count({
     *   where: {
     *     // ... the filter for the MerchProducts we want to count
     *   }
     * })
    **/
    count<T extends MerchProductCountArgs>(
      args?: Subset<T, MerchProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MerchProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MerchProductAggregateArgs>(args: Subset<T, MerchProductAggregateArgs>): Prisma.PrismaPromise<GetMerchProductAggregateType<T>>

    /**
     * Group by MerchProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MerchProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchProductGroupByArgs['orderBy'] }
        : { orderBy?: MerchProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MerchProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MerchProduct model
   */
  readonly fields: MerchProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MerchProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MerchProduct model
   */
  interface MerchProductFieldRefs {
    readonly id: FieldRef<"MerchProduct", 'Int'>
    readonly title: FieldRef<"MerchProduct", 'String'>
    readonly price: FieldRef<"MerchProduct", 'String'>
    readonly image: FieldRef<"MerchProduct", 'String'>
    readonly link: FieldRef<"MerchProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MerchProduct findUnique
   */
  export type MerchProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchProduct
     */
    select?: MerchProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchProduct
     */
    omit?: MerchProductOmit<ExtArgs> | null
    /**
     * Filter, which MerchProduct to fetch.
     */
    where: MerchProductWhereUniqueInput
  }

  /**
   * MerchProduct findUniqueOrThrow
   */
  export type MerchProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchProduct
     */
    select?: MerchProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchProduct
     */
    omit?: MerchProductOmit<ExtArgs> | null
    /**
     * Filter, which MerchProduct to fetch.
     */
    where: MerchProductWhereUniqueInput
  }

  /**
   * MerchProduct findFirst
   */
  export type MerchProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchProduct
     */
    select?: MerchProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchProduct
     */
    omit?: MerchProductOmit<ExtArgs> | null
    /**
     * Filter, which MerchProduct to fetch.
     */
    where?: MerchProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchProducts to fetch.
     */
    orderBy?: MerchProductOrderByWithRelationInput | MerchProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MerchProducts.
     */
    cursor?: MerchProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MerchProducts.
     */
    distinct?: MerchProductScalarFieldEnum | MerchProductScalarFieldEnum[]
  }

  /**
   * MerchProduct findFirstOrThrow
   */
  export type MerchProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchProduct
     */
    select?: MerchProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchProduct
     */
    omit?: MerchProductOmit<ExtArgs> | null
    /**
     * Filter, which MerchProduct to fetch.
     */
    where?: MerchProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchProducts to fetch.
     */
    orderBy?: MerchProductOrderByWithRelationInput | MerchProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MerchProducts.
     */
    cursor?: MerchProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MerchProducts.
     */
    distinct?: MerchProductScalarFieldEnum | MerchProductScalarFieldEnum[]
  }

  /**
   * MerchProduct findMany
   */
  export type MerchProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchProduct
     */
    select?: MerchProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchProduct
     */
    omit?: MerchProductOmit<ExtArgs> | null
    /**
     * Filter, which MerchProducts to fetch.
     */
    where?: MerchProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerchProducts to fetch.
     */
    orderBy?: MerchProductOrderByWithRelationInput | MerchProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MerchProducts.
     */
    cursor?: MerchProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerchProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerchProducts.
     */
    skip?: number
    distinct?: MerchProductScalarFieldEnum | MerchProductScalarFieldEnum[]
  }

  /**
   * MerchProduct create
   */
  export type MerchProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchProduct
     */
    select?: MerchProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchProduct
     */
    omit?: MerchProductOmit<ExtArgs> | null
    /**
     * The data needed to create a MerchProduct.
     */
    data: XOR<MerchProductCreateInput, MerchProductUncheckedCreateInput>
  }

  /**
   * MerchProduct createMany
   */
  export type MerchProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MerchProducts.
     */
    data: MerchProductCreateManyInput | MerchProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MerchProduct createManyAndReturn
   */
  export type MerchProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchProduct
     */
    select?: MerchProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MerchProduct
     */
    omit?: MerchProductOmit<ExtArgs> | null
    /**
     * The data used to create many MerchProducts.
     */
    data: MerchProductCreateManyInput | MerchProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MerchProduct update
   */
  export type MerchProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchProduct
     */
    select?: MerchProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchProduct
     */
    omit?: MerchProductOmit<ExtArgs> | null
    /**
     * The data needed to update a MerchProduct.
     */
    data: XOR<MerchProductUpdateInput, MerchProductUncheckedUpdateInput>
    /**
     * Choose, which MerchProduct to update.
     */
    where: MerchProductWhereUniqueInput
  }

  /**
   * MerchProduct updateMany
   */
  export type MerchProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MerchProducts.
     */
    data: XOR<MerchProductUpdateManyMutationInput, MerchProductUncheckedUpdateManyInput>
    /**
     * Filter which MerchProducts to update
     */
    where?: MerchProductWhereInput
    /**
     * Limit how many MerchProducts to update.
     */
    limit?: number
  }

  /**
   * MerchProduct updateManyAndReturn
   */
  export type MerchProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchProduct
     */
    select?: MerchProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MerchProduct
     */
    omit?: MerchProductOmit<ExtArgs> | null
    /**
     * The data used to update MerchProducts.
     */
    data: XOR<MerchProductUpdateManyMutationInput, MerchProductUncheckedUpdateManyInput>
    /**
     * Filter which MerchProducts to update
     */
    where?: MerchProductWhereInput
    /**
     * Limit how many MerchProducts to update.
     */
    limit?: number
  }

  /**
   * MerchProduct upsert
   */
  export type MerchProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchProduct
     */
    select?: MerchProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchProduct
     */
    omit?: MerchProductOmit<ExtArgs> | null
    /**
     * The filter to search for the MerchProduct to update in case it exists.
     */
    where: MerchProductWhereUniqueInput
    /**
     * In case the MerchProduct found by the `where` argument doesn't exist, create a new MerchProduct with this data.
     */
    create: XOR<MerchProductCreateInput, MerchProductUncheckedCreateInput>
    /**
     * In case the MerchProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchProductUpdateInput, MerchProductUncheckedUpdateInput>
  }

  /**
   * MerchProduct delete
   */
  export type MerchProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchProduct
     */
    select?: MerchProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchProduct
     */
    omit?: MerchProductOmit<ExtArgs> | null
    /**
     * Filter which MerchProduct to delete.
     */
    where: MerchProductWhereUniqueInput
  }

  /**
   * MerchProduct deleteMany
   */
  export type MerchProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MerchProducts to delete
     */
    where?: MerchProductWhereInput
    /**
     * Limit how many MerchProducts to delete.
     */
    limit?: number
  }

  /**
   * MerchProduct without action
   */
  export type MerchProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchProduct
     */
    select?: MerchProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MerchProduct
     */
    omit?: MerchProductOmit<ExtArgs> | null
  }


  /**
   * Model MusicRelease
   */

  export type AggregateMusicRelease = {
    _count: MusicReleaseCountAggregateOutputType | null
    _avg: MusicReleaseAvgAggregateOutputType | null
    _sum: MusicReleaseSumAggregateOutputType | null
    _min: MusicReleaseMinAggregateOutputType | null
    _max: MusicReleaseMaxAggregateOutputType | null
  }

  export type MusicReleaseAvgAggregateOutputType = {
    id: number | null
  }

  export type MusicReleaseSumAggregateOutputType = {
    id: number | null
  }

  export type MusicReleaseMinAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
  }

  export type MusicReleaseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    url: string | null
  }

  export type MusicReleaseCountAggregateOutputType = {
    id: number
    title: number
    url: number
    _all: number
  }


  export type MusicReleaseAvgAggregateInputType = {
    id?: true
  }

  export type MusicReleaseSumAggregateInputType = {
    id?: true
  }

  export type MusicReleaseMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
  }

  export type MusicReleaseMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
  }

  export type MusicReleaseCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    _all?: true
  }

  export type MusicReleaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicRelease to aggregate.
     */
    where?: MusicReleaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicReleases to fetch.
     */
    orderBy?: MusicReleaseOrderByWithRelationInput | MusicReleaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicReleaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicReleases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicReleases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MusicReleases
    **/
    _count?: true | MusicReleaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MusicReleaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MusicReleaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicReleaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicReleaseMaxAggregateInputType
  }

  export type GetMusicReleaseAggregateType<T extends MusicReleaseAggregateArgs> = {
        [P in keyof T & keyof AggregateMusicRelease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusicRelease[P]>
      : GetScalarType<T[P], AggregateMusicRelease[P]>
  }




  export type MusicReleaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicReleaseWhereInput
    orderBy?: MusicReleaseOrderByWithAggregationInput | MusicReleaseOrderByWithAggregationInput[]
    by: MusicReleaseScalarFieldEnum[] | MusicReleaseScalarFieldEnum
    having?: MusicReleaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicReleaseCountAggregateInputType | true
    _avg?: MusicReleaseAvgAggregateInputType
    _sum?: MusicReleaseSumAggregateInputType
    _min?: MusicReleaseMinAggregateInputType
    _max?: MusicReleaseMaxAggregateInputType
  }

  export type MusicReleaseGroupByOutputType = {
    id: number
    title: string
    url: string
    _count: MusicReleaseCountAggregateOutputType | null
    _avg: MusicReleaseAvgAggregateOutputType | null
    _sum: MusicReleaseSumAggregateOutputType | null
    _min: MusicReleaseMinAggregateOutputType | null
    _max: MusicReleaseMaxAggregateOutputType | null
  }

  type GetMusicReleaseGroupByPayload<T extends MusicReleaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicReleaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicReleaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicReleaseGroupByOutputType[P]>
            : GetScalarType<T[P], MusicReleaseGroupByOutputType[P]>
        }
      >
    >


  export type MusicReleaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
  }, ExtArgs["result"]["musicRelease"]>

  export type MusicReleaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
  }, ExtArgs["result"]["musicRelease"]>

  export type MusicReleaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
  }, ExtArgs["result"]["musicRelease"]>

  export type MusicReleaseSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
  }

  export type MusicReleaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url", ExtArgs["result"]["musicRelease"]>

  export type $MusicReleasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MusicRelease"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      url: string
    }, ExtArgs["result"]["musicRelease"]>
    composites: {}
  }

  type MusicReleaseGetPayload<S extends boolean | null | undefined | MusicReleaseDefaultArgs> = $Result.GetResult<Prisma.$MusicReleasePayload, S>

  type MusicReleaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MusicReleaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MusicReleaseCountAggregateInputType | true
    }

  export interface MusicReleaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MusicRelease'], meta: { name: 'MusicRelease' } }
    /**
     * Find zero or one MusicRelease that matches the filter.
     * @param {MusicReleaseFindUniqueArgs} args - Arguments to find a MusicRelease
     * @example
     * // Get one MusicRelease
     * const musicRelease = await prisma.musicRelease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MusicReleaseFindUniqueArgs>(args: SelectSubset<T, MusicReleaseFindUniqueArgs<ExtArgs>>): Prisma__MusicReleaseClient<$Result.GetResult<Prisma.$MusicReleasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MusicRelease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MusicReleaseFindUniqueOrThrowArgs} args - Arguments to find a MusicRelease
     * @example
     * // Get one MusicRelease
     * const musicRelease = await prisma.musicRelease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MusicReleaseFindUniqueOrThrowArgs>(args: SelectSubset<T, MusicReleaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MusicReleaseClient<$Result.GetResult<Prisma.$MusicReleasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicRelease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicReleaseFindFirstArgs} args - Arguments to find a MusicRelease
     * @example
     * // Get one MusicRelease
     * const musicRelease = await prisma.musicRelease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MusicReleaseFindFirstArgs>(args?: SelectSubset<T, MusicReleaseFindFirstArgs<ExtArgs>>): Prisma__MusicReleaseClient<$Result.GetResult<Prisma.$MusicReleasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicRelease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicReleaseFindFirstOrThrowArgs} args - Arguments to find a MusicRelease
     * @example
     * // Get one MusicRelease
     * const musicRelease = await prisma.musicRelease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MusicReleaseFindFirstOrThrowArgs>(args?: SelectSubset<T, MusicReleaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__MusicReleaseClient<$Result.GetResult<Prisma.$MusicReleasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MusicReleases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicReleaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MusicReleases
     * const musicReleases = await prisma.musicRelease.findMany()
     * 
     * // Get first 10 MusicReleases
     * const musicReleases = await prisma.musicRelease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicReleaseWithIdOnly = await prisma.musicRelease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MusicReleaseFindManyArgs>(args?: SelectSubset<T, MusicReleaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicReleasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MusicRelease.
     * @param {MusicReleaseCreateArgs} args - Arguments to create a MusicRelease.
     * @example
     * // Create one MusicRelease
     * const MusicRelease = await prisma.musicRelease.create({
     *   data: {
     *     // ... data to create a MusicRelease
     *   }
     * })
     * 
     */
    create<T extends MusicReleaseCreateArgs>(args: SelectSubset<T, MusicReleaseCreateArgs<ExtArgs>>): Prisma__MusicReleaseClient<$Result.GetResult<Prisma.$MusicReleasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MusicReleases.
     * @param {MusicReleaseCreateManyArgs} args - Arguments to create many MusicReleases.
     * @example
     * // Create many MusicReleases
     * const musicRelease = await prisma.musicRelease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MusicReleaseCreateManyArgs>(args?: SelectSubset<T, MusicReleaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MusicReleases and returns the data saved in the database.
     * @param {MusicReleaseCreateManyAndReturnArgs} args - Arguments to create many MusicReleases.
     * @example
     * // Create many MusicReleases
     * const musicRelease = await prisma.musicRelease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MusicReleases and only return the `id`
     * const musicReleaseWithIdOnly = await prisma.musicRelease.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MusicReleaseCreateManyAndReturnArgs>(args?: SelectSubset<T, MusicReleaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicReleasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MusicRelease.
     * @param {MusicReleaseDeleteArgs} args - Arguments to delete one MusicRelease.
     * @example
     * // Delete one MusicRelease
     * const MusicRelease = await prisma.musicRelease.delete({
     *   where: {
     *     // ... filter to delete one MusicRelease
     *   }
     * })
     * 
     */
    delete<T extends MusicReleaseDeleteArgs>(args: SelectSubset<T, MusicReleaseDeleteArgs<ExtArgs>>): Prisma__MusicReleaseClient<$Result.GetResult<Prisma.$MusicReleasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MusicRelease.
     * @param {MusicReleaseUpdateArgs} args - Arguments to update one MusicRelease.
     * @example
     * // Update one MusicRelease
     * const musicRelease = await prisma.musicRelease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MusicReleaseUpdateArgs>(args: SelectSubset<T, MusicReleaseUpdateArgs<ExtArgs>>): Prisma__MusicReleaseClient<$Result.GetResult<Prisma.$MusicReleasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MusicReleases.
     * @param {MusicReleaseDeleteManyArgs} args - Arguments to filter MusicReleases to delete.
     * @example
     * // Delete a few MusicReleases
     * const { count } = await prisma.musicRelease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MusicReleaseDeleteManyArgs>(args?: SelectSubset<T, MusicReleaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MusicReleases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicReleaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MusicReleases
     * const musicRelease = await prisma.musicRelease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MusicReleaseUpdateManyArgs>(args: SelectSubset<T, MusicReleaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MusicReleases and returns the data updated in the database.
     * @param {MusicReleaseUpdateManyAndReturnArgs} args - Arguments to update many MusicReleases.
     * @example
     * // Update many MusicReleases
     * const musicRelease = await prisma.musicRelease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MusicReleases and only return the `id`
     * const musicReleaseWithIdOnly = await prisma.musicRelease.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MusicReleaseUpdateManyAndReturnArgs>(args: SelectSubset<T, MusicReleaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicReleasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MusicRelease.
     * @param {MusicReleaseUpsertArgs} args - Arguments to update or create a MusicRelease.
     * @example
     * // Update or create a MusicRelease
     * const musicRelease = await prisma.musicRelease.upsert({
     *   create: {
     *     // ... data to create a MusicRelease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MusicRelease we want to update
     *   }
     * })
     */
    upsert<T extends MusicReleaseUpsertArgs>(args: SelectSubset<T, MusicReleaseUpsertArgs<ExtArgs>>): Prisma__MusicReleaseClient<$Result.GetResult<Prisma.$MusicReleasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MusicReleases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicReleaseCountArgs} args - Arguments to filter MusicReleases to count.
     * @example
     * // Count the number of MusicReleases
     * const count = await prisma.musicRelease.count({
     *   where: {
     *     // ... the filter for the MusicReleases we want to count
     *   }
     * })
    **/
    count<T extends MusicReleaseCountArgs>(
      args?: Subset<T, MusicReleaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicReleaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MusicRelease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicReleaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MusicReleaseAggregateArgs>(args: Subset<T, MusicReleaseAggregateArgs>): Prisma.PrismaPromise<GetMusicReleaseAggregateType<T>>

    /**
     * Group by MusicRelease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicReleaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MusicReleaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicReleaseGroupByArgs['orderBy'] }
        : { orderBy?: MusicReleaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MusicReleaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicReleaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MusicRelease model
   */
  readonly fields: MusicReleaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MusicRelease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicReleaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MusicRelease model
   */
  interface MusicReleaseFieldRefs {
    readonly id: FieldRef<"MusicRelease", 'Int'>
    readonly title: FieldRef<"MusicRelease", 'String'>
    readonly url: FieldRef<"MusicRelease", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MusicRelease findUnique
   */
  export type MusicReleaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicRelease
     */
    select?: MusicReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicRelease
     */
    omit?: MusicReleaseOmit<ExtArgs> | null
    /**
     * Filter, which MusicRelease to fetch.
     */
    where: MusicReleaseWhereUniqueInput
  }

  /**
   * MusicRelease findUniqueOrThrow
   */
  export type MusicReleaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicRelease
     */
    select?: MusicReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicRelease
     */
    omit?: MusicReleaseOmit<ExtArgs> | null
    /**
     * Filter, which MusicRelease to fetch.
     */
    where: MusicReleaseWhereUniqueInput
  }

  /**
   * MusicRelease findFirst
   */
  export type MusicReleaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicRelease
     */
    select?: MusicReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicRelease
     */
    omit?: MusicReleaseOmit<ExtArgs> | null
    /**
     * Filter, which MusicRelease to fetch.
     */
    where?: MusicReleaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicReleases to fetch.
     */
    orderBy?: MusicReleaseOrderByWithRelationInput | MusicReleaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicReleases.
     */
    cursor?: MusicReleaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicReleases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicReleases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicReleases.
     */
    distinct?: MusicReleaseScalarFieldEnum | MusicReleaseScalarFieldEnum[]
  }

  /**
   * MusicRelease findFirstOrThrow
   */
  export type MusicReleaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicRelease
     */
    select?: MusicReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicRelease
     */
    omit?: MusicReleaseOmit<ExtArgs> | null
    /**
     * Filter, which MusicRelease to fetch.
     */
    where?: MusicReleaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicReleases to fetch.
     */
    orderBy?: MusicReleaseOrderByWithRelationInput | MusicReleaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicReleases.
     */
    cursor?: MusicReleaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicReleases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicReleases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicReleases.
     */
    distinct?: MusicReleaseScalarFieldEnum | MusicReleaseScalarFieldEnum[]
  }

  /**
   * MusicRelease findMany
   */
  export type MusicReleaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicRelease
     */
    select?: MusicReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicRelease
     */
    omit?: MusicReleaseOmit<ExtArgs> | null
    /**
     * Filter, which MusicReleases to fetch.
     */
    where?: MusicReleaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicReleases to fetch.
     */
    orderBy?: MusicReleaseOrderByWithRelationInput | MusicReleaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MusicReleases.
     */
    cursor?: MusicReleaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicReleases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicReleases.
     */
    skip?: number
    distinct?: MusicReleaseScalarFieldEnum | MusicReleaseScalarFieldEnum[]
  }

  /**
   * MusicRelease create
   */
  export type MusicReleaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicRelease
     */
    select?: MusicReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicRelease
     */
    omit?: MusicReleaseOmit<ExtArgs> | null
    /**
     * The data needed to create a MusicRelease.
     */
    data: XOR<MusicReleaseCreateInput, MusicReleaseUncheckedCreateInput>
  }

  /**
   * MusicRelease createMany
   */
  export type MusicReleaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MusicReleases.
     */
    data: MusicReleaseCreateManyInput | MusicReleaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MusicRelease createManyAndReturn
   */
  export type MusicReleaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicRelease
     */
    select?: MusicReleaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MusicRelease
     */
    omit?: MusicReleaseOmit<ExtArgs> | null
    /**
     * The data used to create many MusicReleases.
     */
    data: MusicReleaseCreateManyInput | MusicReleaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MusicRelease update
   */
  export type MusicReleaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicRelease
     */
    select?: MusicReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicRelease
     */
    omit?: MusicReleaseOmit<ExtArgs> | null
    /**
     * The data needed to update a MusicRelease.
     */
    data: XOR<MusicReleaseUpdateInput, MusicReleaseUncheckedUpdateInput>
    /**
     * Choose, which MusicRelease to update.
     */
    where: MusicReleaseWhereUniqueInput
  }

  /**
   * MusicRelease updateMany
   */
  export type MusicReleaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MusicReleases.
     */
    data: XOR<MusicReleaseUpdateManyMutationInput, MusicReleaseUncheckedUpdateManyInput>
    /**
     * Filter which MusicReleases to update
     */
    where?: MusicReleaseWhereInput
    /**
     * Limit how many MusicReleases to update.
     */
    limit?: number
  }

  /**
   * MusicRelease updateManyAndReturn
   */
  export type MusicReleaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicRelease
     */
    select?: MusicReleaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MusicRelease
     */
    omit?: MusicReleaseOmit<ExtArgs> | null
    /**
     * The data used to update MusicReleases.
     */
    data: XOR<MusicReleaseUpdateManyMutationInput, MusicReleaseUncheckedUpdateManyInput>
    /**
     * Filter which MusicReleases to update
     */
    where?: MusicReleaseWhereInput
    /**
     * Limit how many MusicReleases to update.
     */
    limit?: number
  }

  /**
   * MusicRelease upsert
   */
  export type MusicReleaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicRelease
     */
    select?: MusicReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicRelease
     */
    omit?: MusicReleaseOmit<ExtArgs> | null
    /**
     * The filter to search for the MusicRelease to update in case it exists.
     */
    where: MusicReleaseWhereUniqueInput
    /**
     * In case the MusicRelease found by the `where` argument doesn't exist, create a new MusicRelease with this data.
     */
    create: XOR<MusicReleaseCreateInput, MusicReleaseUncheckedCreateInput>
    /**
     * In case the MusicRelease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicReleaseUpdateInput, MusicReleaseUncheckedUpdateInput>
  }

  /**
   * MusicRelease delete
   */
  export type MusicReleaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicRelease
     */
    select?: MusicReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicRelease
     */
    omit?: MusicReleaseOmit<ExtArgs> | null
    /**
     * Filter which MusicRelease to delete.
     */
    where: MusicReleaseWhereUniqueInput
  }

  /**
   * MusicRelease deleteMany
   */
  export type MusicReleaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicReleases to delete
     */
    where?: MusicReleaseWhereInput
    /**
     * Limit how many MusicReleases to delete.
     */
    limit?: number
  }

  /**
   * MusicRelease without action
   */
  export type MusicReleaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicRelease
     */
    select?: MusicReleaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicRelease
     */
    omit?: MusicReleaseOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StoreItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image: 'image',
    price: 'price'
  };

  export type StoreItemScalarFieldEnum = (typeof StoreItemScalarFieldEnum)[keyof typeof StoreItemScalarFieldEnum]


  export const TourDateScalarFieldEnum: {
    id: 'id',
    date: 'date',
    venue: 'venue',
    city: 'city',
    link: 'link',
    vip: 'vip',
    tickets: 'tickets'
  };

  export type TourDateScalarFieldEnum = (typeof TourDateScalarFieldEnum)[keyof typeof TourDateScalarFieldEnum]


  export const BreadGoodScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image: 'image',
    price: 'price',
    link: 'link'
  };

  export type BreadGoodScalarFieldEnum = (typeof BreadGoodScalarFieldEnum)[keyof typeof BreadGoodScalarFieldEnum]


  export const MerchProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    price: 'price',
    image: 'image',
    link: 'link'
  };

  export type MerchProductScalarFieldEnum = (typeof MerchProductScalarFieldEnum)[keyof typeof MerchProductScalarFieldEnum]


  export const MusicReleaseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url'
  };

  export type MusicReleaseScalarFieldEnum = (typeof MusicReleaseScalarFieldEnum)[keyof typeof MusicReleaseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type StoreItemWhereInput = {
    AND?: StoreItemWhereInput | StoreItemWhereInput[]
    OR?: StoreItemWhereInput[]
    NOT?: StoreItemWhereInput | StoreItemWhereInput[]
    id?: IntFilter<"StoreItem"> | number
    title?: StringFilter<"StoreItem"> | string
    image?: StringFilter<"StoreItem"> | string
    price?: StringFilter<"StoreItem"> | string
  }

  export type StoreItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    price?: SortOrder
  }

  export type StoreItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreItemWhereInput | StoreItemWhereInput[]
    OR?: StoreItemWhereInput[]
    NOT?: StoreItemWhereInput | StoreItemWhereInput[]
    title?: StringFilter<"StoreItem"> | string
    image?: StringFilter<"StoreItem"> | string
    price?: StringFilter<"StoreItem"> | string
  }, "id">

  export type StoreItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    price?: SortOrder
    _count?: StoreItemCountOrderByAggregateInput
    _avg?: StoreItemAvgOrderByAggregateInput
    _max?: StoreItemMaxOrderByAggregateInput
    _min?: StoreItemMinOrderByAggregateInput
    _sum?: StoreItemSumOrderByAggregateInput
  }

  export type StoreItemScalarWhereWithAggregatesInput = {
    AND?: StoreItemScalarWhereWithAggregatesInput | StoreItemScalarWhereWithAggregatesInput[]
    OR?: StoreItemScalarWhereWithAggregatesInput[]
    NOT?: StoreItemScalarWhereWithAggregatesInput | StoreItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreItem"> | number
    title?: StringWithAggregatesFilter<"StoreItem"> | string
    image?: StringWithAggregatesFilter<"StoreItem"> | string
    price?: StringWithAggregatesFilter<"StoreItem"> | string
  }

  export type TourDateWhereInput = {
    AND?: TourDateWhereInput | TourDateWhereInput[]
    OR?: TourDateWhereInput[]
    NOT?: TourDateWhereInput | TourDateWhereInput[]
    id?: IntFilter<"TourDate"> | number
    date?: StringFilter<"TourDate"> | string
    venue?: StringFilter<"TourDate"> | string
    city?: StringFilter<"TourDate"> | string
    link?: StringFilter<"TourDate"> | string
    vip?: BoolFilter<"TourDate"> | boolean
    tickets?: BoolFilter<"TourDate"> | boolean
  }

  export type TourDateOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    link?: SortOrder
    vip?: SortOrder
    tickets?: SortOrder
  }

  export type TourDateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TourDateWhereInput | TourDateWhereInput[]
    OR?: TourDateWhereInput[]
    NOT?: TourDateWhereInput | TourDateWhereInput[]
    date?: StringFilter<"TourDate"> | string
    venue?: StringFilter<"TourDate"> | string
    city?: StringFilter<"TourDate"> | string
    link?: StringFilter<"TourDate"> | string
    vip?: BoolFilter<"TourDate"> | boolean
    tickets?: BoolFilter<"TourDate"> | boolean
  }, "id">

  export type TourDateOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    link?: SortOrder
    vip?: SortOrder
    tickets?: SortOrder
    _count?: TourDateCountOrderByAggregateInput
    _avg?: TourDateAvgOrderByAggregateInput
    _max?: TourDateMaxOrderByAggregateInput
    _min?: TourDateMinOrderByAggregateInput
    _sum?: TourDateSumOrderByAggregateInput
  }

  export type TourDateScalarWhereWithAggregatesInput = {
    AND?: TourDateScalarWhereWithAggregatesInput | TourDateScalarWhereWithAggregatesInput[]
    OR?: TourDateScalarWhereWithAggregatesInput[]
    NOT?: TourDateScalarWhereWithAggregatesInput | TourDateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TourDate"> | number
    date?: StringWithAggregatesFilter<"TourDate"> | string
    venue?: StringWithAggregatesFilter<"TourDate"> | string
    city?: StringWithAggregatesFilter<"TourDate"> | string
    link?: StringWithAggregatesFilter<"TourDate"> | string
    vip?: BoolWithAggregatesFilter<"TourDate"> | boolean
    tickets?: BoolWithAggregatesFilter<"TourDate"> | boolean
  }

  export type BreadGoodWhereInput = {
    AND?: BreadGoodWhereInput | BreadGoodWhereInput[]
    OR?: BreadGoodWhereInput[]
    NOT?: BreadGoodWhereInput | BreadGoodWhereInput[]
    id?: IntFilter<"BreadGood"> | number
    title?: StringFilter<"BreadGood"> | string
    image?: StringFilter<"BreadGood"> | string
    price?: StringFilter<"BreadGood"> | string
    link?: StringFilter<"BreadGood"> | string
  }

  export type BreadGoodOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    price?: SortOrder
    link?: SortOrder
  }

  export type BreadGoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BreadGoodWhereInput | BreadGoodWhereInput[]
    OR?: BreadGoodWhereInput[]
    NOT?: BreadGoodWhereInput | BreadGoodWhereInput[]
    title?: StringFilter<"BreadGood"> | string
    image?: StringFilter<"BreadGood"> | string
    price?: StringFilter<"BreadGood"> | string
    link?: StringFilter<"BreadGood"> | string
  }, "id">

  export type BreadGoodOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    price?: SortOrder
    link?: SortOrder
    _count?: BreadGoodCountOrderByAggregateInput
    _avg?: BreadGoodAvgOrderByAggregateInput
    _max?: BreadGoodMaxOrderByAggregateInput
    _min?: BreadGoodMinOrderByAggregateInput
    _sum?: BreadGoodSumOrderByAggregateInput
  }

  export type BreadGoodScalarWhereWithAggregatesInput = {
    AND?: BreadGoodScalarWhereWithAggregatesInput | BreadGoodScalarWhereWithAggregatesInput[]
    OR?: BreadGoodScalarWhereWithAggregatesInput[]
    NOT?: BreadGoodScalarWhereWithAggregatesInput | BreadGoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BreadGood"> | number
    title?: StringWithAggregatesFilter<"BreadGood"> | string
    image?: StringWithAggregatesFilter<"BreadGood"> | string
    price?: StringWithAggregatesFilter<"BreadGood"> | string
    link?: StringWithAggregatesFilter<"BreadGood"> | string
  }

  export type MerchProductWhereInput = {
    AND?: MerchProductWhereInput | MerchProductWhereInput[]
    OR?: MerchProductWhereInput[]
    NOT?: MerchProductWhereInput | MerchProductWhereInput[]
    id?: IntFilter<"MerchProduct"> | number
    title?: StringFilter<"MerchProduct"> | string
    price?: StringFilter<"MerchProduct"> | string
    image?: StringFilter<"MerchProduct"> | string
    link?: StringFilter<"MerchProduct"> | string
  }

  export type MerchProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    image?: SortOrder
    link?: SortOrder
  }

  export type MerchProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MerchProductWhereInput | MerchProductWhereInput[]
    OR?: MerchProductWhereInput[]
    NOT?: MerchProductWhereInput | MerchProductWhereInput[]
    title?: StringFilter<"MerchProduct"> | string
    price?: StringFilter<"MerchProduct"> | string
    image?: StringFilter<"MerchProduct"> | string
    link?: StringFilter<"MerchProduct"> | string
  }, "id">

  export type MerchProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    image?: SortOrder
    link?: SortOrder
    _count?: MerchProductCountOrderByAggregateInput
    _avg?: MerchProductAvgOrderByAggregateInput
    _max?: MerchProductMaxOrderByAggregateInput
    _min?: MerchProductMinOrderByAggregateInput
    _sum?: MerchProductSumOrderByAggregateInput
  }

  export type MerchProductScalarWhereWithAggregatesInput = {
    AND?: MerchProductScalarWhereWithAggregatesInput | MerchProductScalarWhereWithAggregatesInput[]
    OR?: MerchProductScalarWhereWithAggregatesInput[]
    NOT?: MerchProductScalarWhereWithAggregatesInput | MerchProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MerchProduct"> | number
    title?: StringWithAggregatesFilter<"MerchProduct"> | string
    price?: StringWithAggregatesFilter<"MerchProduct"> | string
    image?: StringWithAggregatesFilter<"MerchProduct"> | string
    link?: StringWithAggregatesFilter<"MerchProduct"> | string
  }

  export type MusicReleaseWhereInput = {
    AND?: MusicReleaseWhereInput | MusicReleaseWhereInput[]
    OR?: MusicReleaseWhereInput[]
    NOT?: MusicReleaseWhereInput | MusicReleaseWhereInput[]
    id?: IntFilter<"MusicRelease"> | number
    title?: StringFilter<"MusicRelease"> | string
    url?: StringFilter<"MusicRelease"> | string
  }

  export type MusicReleaseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
  }

  export type MusicReleaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MusicReleaseWhereInput | MusicReleaseWhereInput[]
    OR?: MusicReleaseWhereInput[]
    NOT?: MusicReleaseWhereInput | MusicReleaseWhereInput[]
    title?: StringFilter<"MusicRelease"> | string
    url?: StringFilter<"MusicRelease"> | string
  }, "id">

  export type MusicReleaseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    _count?: MusicReleaseCountOrderByAggregateInput
    _avg?: MusicReleaseAvgOrderByAggregateInput
    _max?: MusicReleaseMaxOrderByAggregateInput
    _min?: MusicReleaseMinOrderByAggregateInput
    _sum?: MusicReleaseSumOrderByAggregateInput
  }

  export type MusicReleaseScalarWhereWithAggregatesInput = {
    AND?: MusicReleaseScalarWhereWithAggregatesInput | MusicReleaseScalarWhereWithAggregatesInput[]
    OR?: MusicReleaseScalarWhereWithAggregatesInput[]
    NOT?: MusicReleaseScalarWhereWithAggregatesInput | MusicReleaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MusicRelease"> | number
    title?: StringWithAggregatesFilter<"MusicRelease"> | string
    url?: StringWithAggregatesFilter<"MusicRelease"> | string
  }

  export type StoreItemCreateInput = {
    title: string
    image: string
    price: string
  }

  export type StoreItemUncheckedCreateInput = {
    id?: number
    title: string
    image: string
    price: string
  }

  export type StoreItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type StoreItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type StoreItemCreateManyInput = {
    id?: number
    title: string
    image: string
    price: string
  }

  export type StoreItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type StoreItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type TourDateCreateInput = {
    date: string
    venue: string
    city: string
    link: string
    vip?: boolean
    tickets?: boolean
  }

  export type TourDateUncheckedCreateInput = {
    id?: number
    date: string
    venue: string
    city: string
    link: string
    vip?: boolean
    tickets?: boolean
  }

  export type TourDateUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    vip?: BoolFieldUpdateOperationsInput | boolean
    tickets?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TourDateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    vip?: BoolFieldUpdateOperationsInput | boolean
    tickets?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TourDateCreateManyInput = {
    id?: number
    date: string
    venue: string
    city: string
    link: string
    vip?: boolean
    tickets?: boolean
  }

  export type TourDateUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    vip?: BoolFieldUpdateOperationsInput | boolean
    tickets?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TourDateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    venue?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    vip?: BoolFieldUpdateOperationsInput | boolean
    tickets?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BreadGoodCreateInput = {
    title: string
    image: string
    price: string
    link: string
  }

  export type BreadGoodUncheckedCreateInput = {
    id?: number
    title: string
    image: string
    price: string
    link: string
  }

  export type BreadGoodUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type BreadGoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type BreadGoodCreateManyInput = {
    id?: number
    title: string
    image: string
    price: string
    link: string
  }

  export type BreadGoodUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type BreadGoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type MerchProductCreateInput = {
    title: string
    price: string
    image: string
    link: string
  }

  export type MerchProductUncheckedCreateInput = {
    id?: number
    title: string
    price: string
    image: string
    link: string
  }

  export type MerchProductUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type MerchProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type MerchProductCreateManyInput = {
    id?: number
    title: string
    price: string
    image: string
    link: string
  }

  export type MerchProductUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type MerchProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type MusicReleaseCreateInput = {
    title: string
    url: string
  }

  export type MusicReleaseUncheckedCreateInput = {
    id?: number
    title: string
    url: string
  }

  export type MusicReleaseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type MusicReleaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type MusicReleaseCreateManyInput = {
    id?: number
    title: string
    url: string
  }

  export type MusicReleaseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type MusicReleaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StoreItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    price?: SortOrder
  }

  export type StoreItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    price?: SortOrder
  }

  export type StoreItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    price?: SortOrder
  }

  export type StoreItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TourDateCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    link?: SortOrder
    vip?: SortOrder
    tickets?: SortOrder
  }

  export type TourDateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TourDateMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    link?: SortOrder
    vip?: SortOrder
    tickets?: SortOrder
  }

  export type TourDateMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    venue?: SortOrder
    city?: SortOrder
    link?: SortOrder
    vip?: SortOrder
    tickets?: SortOrder
  }

  export type TourDateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BreadGoodCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    price?: SortOrder
    link?: SortOrder
  }

  export type BreadGoodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BreadGoodMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    price?: SortOrder
    link?: SortOrder
  }

  export type BreadGoodMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    price?: SortOrder
    link?: SortOrder
  }

  export type BreadGoodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MerchProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    image?: SortOrder
    link?: SortOrder
  }

  export type MerchProductAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MerchProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    image?: SortOrder
    link?: SortOrder
  }

  export type MerchProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    image?: SortOrder
    link?: SortOrder
  }

  export type MerchProductSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MusicReleaseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
  }

  export type MusicReleaseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MusicReleaseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
  }

  export type MusicReleaseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
  }

  export type MusicReleaseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}