
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Kendaraan
 * 
 */
export type Kendaraan = $Result.DefaultSelection<Prisma.$KendaraanPayload>
/**
 * Model Transaksi
 * 
 */
export type Transaksi = $Result.DefaultSelection<Prisma.$TransaksiPayload>
/**
 * Model Foto
 * 
 */
export type Foto = $Result.DefaultSelection<Prisma.$FotoPayload>
/**
 * Model Jenis
 * 
 */
export type Jenis = $Result.DefaultSelection<Prisma.$JenisPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pegawai
 * 
 */
export type Pegawai = $Result.DefaultSelection<Prisma.$PegawaiPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contacts
 * const contacts = await prisma.contact.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Contacts
   * const contacts = await prisma.contact.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.kendaraan`: Exposes CRUD operations for the **Kendaraan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kendaraans
    * const kendaraans = await prisma.kendaraan.findMany()
    * ```
    */
  get kendaraan(): Prisma.KendaraanDelegate<ExtArgs>;

  /**
   * `prisma.transaksi`: Exposes CRUD operations for the **Transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksis
    * const transaksis = await prisma.transaksi.findMany()
    * ```
    */
  get transaksi(): Prisma.TransaksiDelegate<ExtArgs>;

  /**
   * `prisma.foto`: Exposes CRUD operations for the **Foto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fotos
    * const fotos = await prisma.foto.findMany()
    * ```
    */
  get foto(): Prisma.FotoDelegate<ExtArgs>;

  /**
   * `prisma.jenis`: Exposes CRUD operations for the **Jenis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jenis
    * const jenis = await prisma.jenis.findMany()
    * ```
    */
  get jenis(): Prisma.JenisDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.pegawai`: Exposes CRUD operations for the **Pegawai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pegawais
    * const pegawais = await prisma.pegawai.findMany()
    * ```
    */
  get pegawai(): Prisma.PegawaiDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Contact: 'Contact',
    Customer: 'Customer',
    Kendaraan: 'Kendaraan',
    Transaksi: 'Transaksi',
    Foto: 'Foto',
    Jenis: 'Jenis',
    User: 'User',
    Pegawai: 'Pegawai'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'contact' | 'customer' | 'kendaraan' | 'transaksi' | 'foto' | 'jenis' | 'user' | 'pegawai'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Kendaraan: {
        payload: Prisma.$KendaraanPayload<ExtArgs>
        fields: Prisma.KendaraanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KendaraanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KendaraanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>
          }
          findFirst: {
            args: Prisma.KendaraanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KendaraanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>
          }
          findMany: {
            args: Prisma.KendaraanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>[]
          }
          create: {
            args: Prisma.KendaraanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>
          }
          createMany: {
            args: Prisma.KendaraanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KendaraanCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>[]
          }
          delete: {
            args: Prisma.KendaraanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>
          }
          update: {
            args: Prisma.KendaraanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>
          }
          deleteMany: {
            args: Prisma.KendaraanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KendaraanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KendaraanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KendaraanPayload>
          }
          aggregate: {
            args: Prisma.KendaraanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKendaraan>
          }
          groupBy: {
            args: Prisma.KendaraanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KendaraanGroupByOutputType>[]
          }
          count: {
            args: Prisma.KendaraanCountArgs<ExtArgs>,
            result: $Utils.Optional<KendaraanCountAggregateOutputType> | number
          }
        }
      }
      Transaksi: {
        payload: Prisma.$TransaksiPayload<ExtArgs>
        fields: Prisma.TransaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransaksiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransaksiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          findFirst: {
            args: Prisma.TransaksiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransaksiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          findMany: {
            args: Prisma.TransaksiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>[]
          }
          create: {
            args: Prisma.TransaksiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          createMany: {
            args: Prisma.TransaksiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransaksiCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>[]
          }
          delete: {
            args: Prisma.TransaksiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          update: {
            args: Prisma.TransaksiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          deleteMany: {
            args: Prisma.TransaksiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransaksiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransaksiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          aggregate: {
            args: Prisma.TransaksiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaksi>
          }
          groupBy: {
            args: Prisma.TransaksiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransaksiCountArgs<ExtArgs>,
            result: $Utils.Optional<TransaksiCountAggregateOutputType> | number
          }
        }
      }
      Foto: {
        payload: Prisma.$FotoPayload<ExtArgs>
        fields: Prisma.FotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findFirst: {
            args: Prisma.FotoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findMany: {
            args: Prisma.FotoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          create: {
            args: Prisma.FotoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          createMany: {
            args: Prisma.FotoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FotoCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          delete: {
            args: Prisma.FotoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          update: {
            args: Prisma.FotoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          deleteMany: {
            args: Prisma.FotoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FotoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FotoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          aggregate: {
            args: Prisma.FotoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFoto>
          }
          groupBy: {
            args: Prisma.FotoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoCountArgs<ExtArgs>,
            result: $Utils.Optional<FotoCountAggregateOutputType> | number
          }
        }
      }
      Jenis: {
        payload: Prisma.$JenisPayload<ExtArgs>
        fields: Prisma.JenisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JenisFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JenisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JenisFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JenisPayload>
          }
          findFirst: {
            args: Prisma.JenisFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JenisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JenisFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JenisPayload>
          }
          findMany: {
            args: Prisma.JenisFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JenisPayload>[]
          }
          create: {
            args: Prisma.JenisCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JenisPayload>
          }
          createMany: {
            args: Prisma.JenisCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JenisCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JenisPayload>[]
          }
          delete: {
            args: Prisma.JenisDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JenisPayload>
          }
          update: {
            args: Prisma.JenisUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JenisPayload>
          }
          deleteMany: {
            args: Prisma.JenisDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JenisUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JenisUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JenisPayload>
          }
          aggregate: {
            args: Prisma.JenisAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJenis>
          }
          groupBy: {
            args: Prisma.JenisGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JenisGroupByOutputType>[]
          }
          count: {
            args: Prisma.JenisCountArgs<ExtArgs>,
            result: $Utils.Optional<JenisCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pegawai: {
        payload: Prisma.$PegawaiPayload<ExtArgs>
        fields: Prisma.PegawaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PegawaiFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PegawaiFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          findFirst: {
            args: Prisma.PegawaiFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PegawaiFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          findMany: {
            args: Prisma.PegawaiFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>[]
          }
          create: {
            args: Prisma.PegawaiCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          createMany: {
            args: Prisma.PegawaiCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PegawaiCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>[]
          }
          delete: {
            args: Prisma.PegawaiDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          update: {
            args: Prisma.PegawaiUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          deleteMany: {
            args: Prisma.PegawaiDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PegawaiUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PegawaiUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          aggregate: {
            args: Prisma.PegawaiAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePegawai>
          }
          groupBy: {
            args: Prisma.PegawaiGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PegawaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.PegawaiCountArgs<ExtArgs>,
            result: $Utils.Optional<PegawaiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    transaksi: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | CustomerCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
  }


  /**
   * Count Type KendaraanCountOutputType
   */

  export type KendaraanCountOutputType = {
    foto: number
    transaksi: number
  }

  export type KendaraanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foto?: boolean | KendaraanCountOutputTypeCountFotoArgs
    transaksi?: boolean | KendaraanCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * KendaraanCountOutputType without action
   */
  export type KendaraanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KendaraanCountOutputType
     */
    select?: KendaraanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KendaraanCountOutputType without action
   */
  export type KendaraanCountOutputTypeCountFotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
  }

  /**
   * KendaraanCountOutputType without action
   */
  export type KendaraanCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
  }


  /**
   * Count Type JenisCountOutputType
   */

  export type JenisCountOutputType = {
    kendaraan: number
  }

  export type JenisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kendaraan?: boolean | JenisCountOutputTypeCountKendaraanArgs
  }

  // Custom InputTypes
  /**
   * JenisCountOutputType without action
   */
  export type JenisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisCountOutputType
     */
    select?: JenisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JenisCountOutputType without action
   */
  export type JenisCountOutputTypeCountKendaraanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KendaraanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    name: string
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }



  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }


  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
    **/
    create<T extends ContactCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactCreateArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ContactCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
    **/
    delete<T extends ContactDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
    **/
    upsert<T extends ContactUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Contact model
   */ 
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    alamat: string | null
    hp: string | null
    nik: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    alamat: string | null
    hp: string | null
    nik: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    alamat: number
    hp: number
    nik: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    alamat?: true
    hp?: true
    nik?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    alamat?: true
    hp?: true
    nik?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    alamat?: true
    hp?: true
    nik?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    alamat: string
    hp: string
    nik: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    alamat?: boolean
    hp?: boolean
    nik?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaksi?: boolean | Customer$transaksiArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    alamat?: boolean
    hp?: boolean
    nik?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | Customer$transaksiArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      transaksi: Prisma.$TransaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      alamat: string
      hp: string
      nik: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }


  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    transaksi<T extends Customer$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, Customer$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly alamat: FieldRef<"Customer", 'String'>
    readonly hp: FieldRef<"Customer", 'String'>
    readonly nik: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.transaksi
   */
  export type Customer$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    cursor?: TransaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Kendaraan
   */

  export type AggregateKendaraan = {
    _count: KendaraanCountAggregateOutputType | null
    _avg: KendaraanAvgAggregateOutputType | null
    _sum: KendaraanSumAggregateOutputType | null
    _min: KendaraanMinAggregateOutputType | null
    _max: KendaraanMaxAggregateOutputType | null
  }

  export type KendaraanAvgAggregateOutputType = {
    cc: number | null
    harga_sewa: Decimal | null
  }

  export type KendaraanSumAggregateOutputType = {
    cc: number | null
    harga_sewa: Decimal | null
  }

  export type KendaraanMinAggregateOutputType = {
    plat: string | null
    merk: string | null
    warna: string | null
    tahun: string | null
    bahan_bakar: string | null
    cc: number | null
    harga_sewa: Decimal | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    jenisKendaraan: string | null
  }

  export type KendaraanMaxAggregateOutputType = {
    plat: string | null
    merk: string | null
    warna: string | null
    tahun: string | null
    bahan_bakar: string | null
    cc: number | null
    harga_sewa: Decimal | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    jenisKendaraan: string | null
  }

  export type KendaraanCountAggregateOutputType = {
    plat: number
    merk: number
    warna: number
    tahun: number
    bahan_bakar: number
    cc: number
    harga_sewa: number
    status: number
    createdAt: number
    updatedAt: number
    jenisKendaraan: number
    _all: number
  }


  export type KendaraanAvgAggregateInputType = {
    cc?: true
    harga_sewa?: true
  }

  export type KendaraanSumAggregateInputType = {
    cc?: true
    harga_sewa?: true
  }

  export type KendaraanMinAggregateInputType = {
    plat?: true
    merk?: true
    warna?: true
    tahun?: true
    bahan_bakar?: true
    cc?: true
    harga_sewa?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    jenisKendaraan?: true
  }

  export type KendaraanMaxAggregateInputType = {
    plat?: true
    merk?: true
    warna?: true
    tahun?: true
    bahan_bakar?: true
    cc?: true
    harga_sewa?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    jenisKendaraan?: true
  }

  export type KendaraanCountAggregateInputType = {
    plat?: true
    merk?: true
    warna?: true
    tahun?: true
    bahan_bakar?: true
    cc?: true
    harga_sewa?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    jenisKendaraan?: true
    _all?: true
  }

  export type KendaraanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kendaraan to aggregate.
     */
    where?: KendaraanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kendaraans to fetch.
     */
    orderBy?: KendaraanOrderByWithRelationInput | KendaraanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KendaraanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kendaraans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kendaraans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kendaraans
    **/
    _count?: true | KendaraanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KendaraanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KendaraanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KendaraanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KendaraanMaxAggregateInputType
  }

  export type GetKendaraanAggregateType<T extends KendaraanAggregateArgs> = {
        [P in keyof T & keyof AggregateKendaraan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKendaraan[P]>
      : GetScalarType<T[P], AggregateKendaraan[P]>
  }




  export type KendaraanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KendaraanWhereInput
    orderBy?: KendaraanOrderByWithAggregationInput | KendaraanOrderByWithAggregationInput[]
    by: KendaraanScalarFieldEnum[] | KendaraanScalarFieldEnum
    having?: KendaraanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KendaraanCountAggregateInputType | true
    _avg?: KendaraanAvgAggregateInputType
    _sum?: KendaraanSumAggregateInputType
    _min?: KendaraanMinAggregateInputType
    _max?: KendaraanMaxAggregateInputType
  }

  export type KendaraanGroupByOutputType = {
    plat: string
    merk: string
    warna: string
    tahun: string
    bahan_bakar: string
    cc: number
    harga_sewa: Decimal
    status: boolean
    createdAt: Date
    updatedAt: Date
    jenisKendaraan: string
    _count: KendaraanCountAggregateOutputType | null
    _avg: KendaraanAvgAggregateOutputType | null
    _sum: KendaraanSumAggregateOutputType | null
    _min: KendaraanMinAggregateOutputType | null
    _max: KendaraanMaxAggregateOutputType | null
  }

  type GetKendaraanGroupByPayload<T extends KendaraanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KendaraanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KendaraanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KendaraanGroupByOutputType[P]>
            : GetScalarType<T[P], KendaraanGroupByOutputType[P]>
        }
      >
    >


  export type KendaraanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plat?: boolean
    merk?: boolean
    warna?: boolean
    tahun?: boolean
    bahan_bakar?: boolean
    cc?: boolean
    harga_sewa?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jenisKendaraan?: boolean
    jenis?: boolean | JenisDefaultArgs<ExtArgs>
    foto?: boolean | Kendaraan$fotoArgs<ExtArgs>
    transaksi?: boolean | Kendaraan$transaksiArgs<ExtArgs>
    _count?: boolean | KendaraanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kendaraan"]>

  export type KendaraanSelectScalar = {
    plat?: boolean
    merk?: boolean
    warna?: boolean
    tahun?: boolean
    bahan_bakar?: boolean
    cc?: boolean
    harga_sewa?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jenisKendaraan?: boolean
  }


  export type KendaraanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jenis?: boolean | JenisDefaultArgs<ExtArgs>
    foto?: boolean | Kendaraan$fotoArgs<ExtArgs>
    transaksi?: boolean | Kendaraan$transaksiArgs<ExtArgs>
    _count?: boolean | KendaraanCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $KendaraanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kendaraan"
    objects: {
      jenis: Prisma.$JenisPayload<ExtArgs>
      foto: Prisma.$FotoPayload<ExtArgs>[]
      transaksi: Prisma.$TransaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      plat: string
      merk: string
      warna: string
      tahun: string
      bahan_bakar: string
      cc: number
      harga_sewa: Prisma.Decimal
      status: boolean
      createdAt: Date
      updatedAt: Date
      jenisKendaraan: string
    }, ExtArgs["result"]["kendaraan"]>
    composites: {}
  }


  type KendaraanGetPayload<S extends boolean | null | undefined | KendaraanDefaultArgs> = $Result.GetResult<Prisma.$KendaraanPayload, S>

  type KendaraanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KendaraanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KendaraanCountAggregateInputType | true
    }

  export interface KendaraanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kendaraan'], meta: { name: 'Kendaraan' } }
    /**
     * Find zero or one Kendaraan that matches the filter.
     * @param {KendaraanFindUniqueArgs} args - Arguments to find a Kendaraan
     * @example
     * // Get one Kendaraan
     * const kendaraan = await prisma.kendaraan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KendaraanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KendaraanFindUniqueArgs<ExtArgs>>
    ): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Kendaraan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KendaraanFindUniqueOrThrowArgs} args - Arguments to find a Kendaraan
     * @example
     * // Get one Kendaraan
     * const kendaraan = await prisma.kendaraan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KendaraanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KendaraanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Kendaraan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanFindFirstArgs} args - Arguments to find a Kendaraan
     * @example
     * // Get one Kendaraan
     * const kendaraan = await prisma.kendaraan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KendaraanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KendaraanFindFirstArgs<ExtArgs>>
    ): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Kendaraan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanFindFirstOrThrowArgs} args - Arguments to find a Kendaraan
     * @example
     * // Get one Kendaraan
     * const kendaraan = await prisma.kendaraan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KendaraanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KendaraanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Kendaraans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kendaraans
     * const kendaraans = await prisma.kendaraan.findMany()
     * 
     * // Get first 10 Kendaraans
     * const kendaraans = await prisma.kendaraan.findMany({ take: 10 })
     * 
     * // Only select the `plat`
     * const kendaraanWithPlatOnly = await prisma.kendaraan.findMany({ select: { plat: true } })
     * 
    **/
    findMany<T extends KendaraanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KendaraanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Kendaraan.
     * @param {KendaraanCreateArgs} args - Arguments to create a Kendaraan.
     * @example
     * // Create one Kendaraan
     * const Kendaraan = await prisma.kendaraan.create({
     *   data: {
     *     // ... data to create a Kendaraan
     *   }
     * })
     * 
    **/
    create<T extends KendaraanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KendaraanCreateArgs<ExtArgs>>
    ): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Kendaraans.
     * @param {KendaraanCreateManyArgs} args - Arguments to create many Kendaraans.
     * @example
     * // Create many Kendaraans
     * const kendaraan = await prisma.kendaraan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends KendaraanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KendaraanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kendaraans and returns the data saved in the database.
     * @param {KendaraanCreateManyAndReturnArgs} args - Arguments to create many Kendaraans.
     * @example
     * // Create many Kendaraans
     * const kendaraan = await prisma.kendaraan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kendaraans and only return the `plat`
     * const kendaraanWithPlatOnly = await prisma.kendaraan.createManyAndReturn({ 
     *   select: { plat: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends KendaraanCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, KendaraanCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Kendaraan.
     * @param {KendaraanDeleteArgs} args - Arguments to delete one Kendaraan.
     * @example
     * // Delete one Kendaraan
     * const Kendaraan = await prisma.kendaraan.delete({
     *   where: {
     *     // ... filter to delete one Kendaraan
     *   }
     * })
     * 
    **/
    delete<T extends KendaraanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KendaraanDeleteArgs<ExtArgs>>
    ): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Kendaraan.
     * @param {KendaraanUpdateArgs} args - Arguments to update one Kendaraan.
     * @example
     * // Update one Kendaraan
     * const kendaraan = await prisma.kendaraan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KendaraanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KendaraanUpdateArgs<ExtArgs>>
    ): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Kendaraans.
     * @param {KendaraanDeleteManyArgs} args - Arguments to filter Kendaraans to delete.
     * @example
     * // Delete a few Kendaraans
     * const { count } = await prisma.kendaraan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KendaraanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KendaraanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kendaraans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kendaraans
     * const kendaraan = await prisma.kendaraan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KendaraanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KendaraanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kendaraan.
     * @param {KendaraanUpsertArgs} args - Arguments to update or create a Kendaraan.
     * @example
     * // Update or create a Kendaraan
     * const kendaraan = await prisma.kendaraan.upsert({
     *   create: {
     *     // ... data to create a Kendaraan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kendaraan we want to update
     *   }
     * })
    **/
    upsert<T extends KendaraanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KendaraanUpsertArgs<ExtArgs>>
    ): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Kendaraans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanCountArgs} args - Arguments to filter Kendaraans to count.
     * @example
     * // Count the number of Kendaraans
     * const count = await prisma.kendaraan.count({
     *   where: {
     *     // ... the filter for the Kendaraans we want to count
     *   }
     * })
    **/
    count<T extends KendaraanCountArgs>(
      args?: Subset<T, KendaraanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KendaraanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kendaraan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KendaraanAggregateArgs>(args: Subset<T, KendaraanAggregateArgs>): Prisma.PrismaPromise<GetKendaraanAggregateType<T>>

    /**
     * Group by Kendaraan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KendaraanGroupByArgs} args - Group by arguments.
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
      T extends KendaraanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KendaraanGroupByArgs['orderBy'] }
        : { orderBy?: KendaraanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KendaraanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKendaraanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kendaraan model
   */
  readonly fields: KendaraanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kendaraan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KendaraanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    jenis<T extends JenisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JenisDefaultArgs<ExtArgs>>): Prisma__JenisClient<$Result.GetResult<Prisma.$JenisPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    foto<T extends Kendaraan$fotoArgs<ExtArgs> = {}>(args?: Subset<T, Kendaraan$fotoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, 'findMany'> | Null>;

    transaksi<T extends Kendaraan$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, Kendaraan$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Kendaraan model
   */ 
  interface KendaraanFieldRefs {
    readonly plat: FieldRef<"Kendaraan", 'String'>
    readonly merk: FieldRef<"Kendaraan", 'String'>
    readonly warna: FieldRef<"Kendaraan", 'String'>
    readonly tahun: FieldRef<"Kendaraan", 'String'>
    readonly bahan_bakar: FieldRef<"Kendaraan", 'String'>
    readonly cc: FieldRef<"Kendaraan", 'Int'>
    readonly harga_sewa: FieldRef<"Kendaraan", 'Decimal'>
    readonly status: FieldRef<"Kendaraan", 'Boolean'>
    readonly createdAt: FieldRef<"Kendaraan", 'DateTime'>
    readonly updatedAt: FieldRef<"Kendaraan", 'DateTime'>
    readonly jenisKendaraan: FieldRef<"Kendaraan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Kendaraan findUnique
   */
  export type KendaraanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KendaraanInclude<ExtArgs> | null
    /**
     * Filter, which Kendaraan to fetch.
     */
    where: KendaraanWhereUniqueInput
  }

  /**
   * Kendaraan findUniqueOrThrow
   */
  export type KendaraanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KendaraanInclude<ExtArgs> | null
    /**
     * Filter, which Kendaraan to fetch.
     */
    where: KendaraanWhereUniqueInput
  }

  /**
   * Kendaraan findFirst
   */
  export type KendaraanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KendaraanInclude<ExtArgs> | null
    /**
     * Filter, which Kendaraan to fetch.
     */
    where?: KendaraanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kendaraans to fetch.
     */
    orderBy?: KendaraanOrderByWithRelationInput | KendaraanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kendaraans.
     */
    cursor?: KendaraanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kendaraans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kendaraans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kendaraans.
     */
    distinct?: KendaraanScalarFieldEnum | KendaraanScalarFieldEnum[]
  }

  /**
   * Kendaraan findFirstOrThrow
   */
  export type KendaraanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KendaraanInclude<ExtArgs> | null
    /**
     * Filter, which Kendaraan to fetch.
     */
    where?: KendaraanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kendaraans to fetch.
     */
    orderBy?: KendaraanOrderByWithRelationInput | KendaraanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kendaraans.
     */
    cursor?: KendaraanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kendaraans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kendaraans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kendaraans.
     */
    distinct?: KendaraanScalarFieldEnum | KendaraanScalarFieldEnum[]
  }

  /**
   * Kendaraan findMany
   */
  export type KendaraanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KendaraanInclude<ExtArgs> | null
    /**
     * Filter, which Kendaraans to fetch.
     */
    where?: KendaraanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kendaraans to fetch.
     */
    orderBy?: KendaraanOrderByWithRelationInput | KendaraanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kendaraans.
     */
    cursor?: KendaraanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kendaraans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kendaraans.
     */
    skip?: number
    distinct?: KendaraanScalarFieldEnum | KendaraanScalarFieldEnum[]
  }

  /**
   * Kendaraan create
   */
  export type KendaraanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KendaraanInclude<ExtArgs> | null
    /**
     * The data needed to create a Kendaraan.
     */
    data: XOR<KendaraanCreateInput, KendaraanUncheckedCreateInput>
  }

  /**
   * Kendaraan createMany
   */
  export type KendaraanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kendaraans.
     */
    data: KendaraanCreateManyInput | KendaraanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kendaraan createManyAndReturn
   */
  export type KendaraanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KendaraanInclude<ExtArgs> | null
    /**
     * The data used to create many Kendaraans.
     */
    data: KendaraanCreateManyInput | KendaraanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kendaraan update
   */
  export type KendaraanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KendaraanInclude<ExtArgs> | null
    /**
     * The data needed to update a Kendaraan.
     */
    data: XOR<KendaraanUpdateInput, KendaraanUncheckedUpdateInput>
    /**
     * Choose, which Kendaraan to update.
     */
    where: KendaraanWhereUniqueInput
  }

  /**
   * Kendaraan updateMany
   */
  export type KendaraanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kendaraans.
     */
    data: XOR<KendaraanUpdateManyMutationInput, KendaraanUncheckedUpdateManyInput>
    /**
     * Filter which Kendaraans to update
     */
    where?: KendaraanWhereInput
  }

  /**
   * Kendaraan upsert
   */
  export type KendaraanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KendaraanInclude<ExtArgs> | null
    /**
     * The filter to search for the Kendaraan to update in case it exists.
     */
    where: KendaraanWhereUniqueInput
    /**
     * In case the Kendaraan found by the `where` argument doesn't exist, create a new Kendaraan with this data.
     */
    create: XOR<KendaraanCreateInput, KendaraanUncheckedCreateInput>
    /**
     * In case the Kendaraan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KendaraanUpdateInput, KendaraanUncheckedUpdateInput>
  }

  /**
   * Kendaraan delete
   */
  export type KendaraanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KendaraanInclude<ExtArgs> | null
    /**
     * Filter which Kendaraan to delete.
     */
    where: KendaraanWhereUniqueInput
  }

  /**
   * Kendaraan deleteMany
   */
  export type KendaraanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kendaraans to delete
     */
    where?: KendaraanWhereInput
  }

  /**
   * Kendaraan.foto
   */
  export type Kendaraan$fotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    cursor?: FotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Kendaraan.transaksi
   */
  export type Kendaraan$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    cursor?: TransaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Kendaraan without action
   */
  export type KendaraanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KendaraanInclude<ExtArgs> | null
  }


  /**
   * Model Transaksi
   */

  export type AggregateTransaksi = {
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  export type TransaksiAvgAggregateOutputType = {
    total_harga: Decimal | null
  }

  export type TransaksiSumAggregateOutputType = {
    total_harga: Decimal | null
  }

  export type TransaksiMinAggregateOutputType = {
    transaksiId: string | null
    kendaraan_plat: string | null
    customer_id: string | null
    tgl_mulai_sewa: Date | null
    tgl_selesai_sewa: Date | null
    total_harga: Decimal | null
    deskripsi: string | null
    url_foto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransaksiMaxAggregateOutputType = {
    transaksiId: string | null
    kendaraan_plat: string | null
    customer_id: string | null
    tgl_mulai_sewa: Date | null
    tgl_selesai_sewa: Date | null
    total_harga: Decimal | null
    deskripsi: string | null
    url_foto: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransaksiCountAggregateOutputType = {
    transaksiId: number
    kendaraan_plat: number
    customer_id: number
    tgl_mulai_sewa: number
    tgl_selesai_sewa: number
    total_harga: number
    deskripsi: number
    url_foto: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransaksiAvgAggregateInputType = {
    total_harga?: true
  }

  export type TransaksiSumAggregateInputType = {
    total_harga?: true
  }

  export type TransaksiMinAggregateInputType = {
    transaksiId?: true
    kendaraan_plat?: true
    customer_id?: true
    tgl_mulai_sewa?: true
    tgl_selesai_sewa?: true
    total_harga?: true
    deskripsi?: true
    url_foto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransaksiMaxAggregateInputType = {
    transaksiId?: true
    kendaraan_plat?: true
    customer_id?: true
    tgl_mulai_sewa?: true
    tgl_selesai_sewa?: true
    total_harga?: true
    deskripsi?: true
    url_foto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransaksiCountAggregateInputType = {
    transaksiId?: true
    kendaraan_plat?: true
    customer_id?: true
    tgl_mulai_sewa?: true
    tgl_selesai_sewa?: true
    total_harga?: true
    deskripsi?: true
    url_foto?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaksi to aggregate.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transaksis
    **/
    _count?: true | TransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiMaxAggregateInputType
  }

  export type GetTransaksiAggregateType<T extends TransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi[P]>
      : GetScalarType<T[P], AggregateTransaksi[P]>
  }




  export type TransaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithAggregationInput | TransaksiOrderByWithAggregationInput[]
    by: TransaksiScalarFieldEnum[] | TransaksiScalarFieldEnum
    having?: TransaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiCountAggregateInputType | true
    _avg?: TransaksiAvgAggregateInputType
    _sum?: TransaksiSumAggregateInputType
    _min?: TransaksiMinAggregateInputType
    _max?: TransaksiMaxAggregateInputType
  }

  export type TransaksiGroupByOutputType = {
    transaksiId: string
    kendaraan_plat: string
    customer_id: string
    tgl_mulai_sewa: Date
    tgl_selesai_sewa: Date
    total_harga: Decimal
    deskripsi: string
    url_foto: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  type GetTransaksiGroupByPayload<T extends TransaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
        }
      >
    >


  export type TransaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaksiId?: boolean
    kendaraan_plat?: boolean
    customer_id?: boolean
    tgl_mulai_sewa?: boolean
    tgl_selesai_sewa?: boolean
    total_harga?: boolean
    deskripsi?: boolean
    url_foto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kendaraan?: boolean | KendaraanDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type TransaksiSelectScalar = {
    transaksiId?: boolean
    kendaraan_plat?: boolean
    customer_id?: boolean
    tgl_mulai_sewa?: boolean
    tgl_selesai_sewa?: boolean
    total_harga?: boolean
    deskripsi?: boolean
    url_foto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type TransaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kendaraan?: boolean | KendaraanDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }


  export type $TransaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaksi"
    objects: {
      kendaraan: Prisma.$KendaraanPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      transaksiId: string
      kendaraan_plat: string
      customer_id: string
      tgl_mulai_sewa: Date
      tgl_selesai_sewa: Date
      total_harga: Prisma.Decimal
      deskripsi: string
      url_foto: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaksi"]>
    composites: {}
  }


  type TransaksiGetPayload<S extends boolean | null | undefined | TransaksiDefaultArgs> = $Result.GetResult<Prisma.$TransaksiPayload, S>

  type TransaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransaksiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransaksiCountAggregateInputType | true
    }

  export interface TransaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaksi'], meta: { name: 'Transaksi' } }
    /**
     * Find zero or one Transaksi that matches the filter.
     * @param {TransaksiFindUniqueArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransaksiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransaksiFindUniqueArgs<ExtArgs>>
    ): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaksi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransaksiFindUniqueOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransaksiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindFirstArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransaksiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiFindFirstArgs<ExtArgs>>
    ): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindFirstOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransaksiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksis
     * const transaksis = await prisma.transaksi.findMany()
     * 
     * // Get first 10 Transaksis
     * const transaksis = await prisma.transaksi.findMany({ take: 10 })
     * 
     * // Only select the `transaksiId`
     * const transaksiWithTransaksiIdOnly = await prisma.transaksi.findMany({ select: { transaksiId: true } })
     * 
    **/
    findMany<T extends TransaksiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaksi.
     * @param {TransaksiCreateArgs} args - Arguments to create a Transaksi.
     * @example
     * // Create one Transaksi
     * const Transaksi = await prisma.transaksi.create({
     *   data: {
     *     // ... data to create a Transaksi
     *   }
     * })
     * 
    **/
    create<T extends TransaksiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransaksiCreateArgs<ExtArgs>>
    ): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transaksis.
     * @param {TransaksiCreateManyArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TransaksiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaksis and returns the data saved in the database.
     * @param {TransaksiCreateManyAndReturnArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaksis and only return the `transaksiId`
     * const transaksiWithTransaksiIdOnly = await prisma.transaksi.createManyAndReturn({ 
     *   select: { transaksiId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TransaksiCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Transaksi.
     * @param {TransaksiDeleteArgs} args - Arguments to delete one Transaksi.
     * @example
     * // Delete one Transaksi
     * const Transaksi = await prisma.transaksi.delete({
     *   where: {
     *     // ... filter to delete one Transaksi
     *   }
     * })
     * 
    **/
    delete<T extends TransaksiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransaksiDeleteArgs<ExtArgs>>
    ): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaksi.
     * @param {TransaksiUpdateArgs} args - Arguments to update one Transaksi.
     * @example
     * // Update one Transaksi
     * const transaksi = await prisma.transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransaksiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransaksiUpdateArgs<ExtArgs>>
    ): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transaksis.
     * @param {TransaksiDeleteManyArgs} args - Arguments to filter Transaksis to delete.
     * @example
     * // Delete a few Transaksis
     * const { count } = await prisma.transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransaksiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransaksiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransaksiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransaksiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaksi.
     * @param {TransaksiUpsertArgs} args - Arguments to update or create a Transaksi.
     * @example
     * // Update or create a Transaksi
     * const transaksi = await prisma.transaksi.upsert({
     *   create: {
     *     // ... data to create a Transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi we want to update
     *   }
     * })
    **/
    upsert<T extends TransaksiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransaksiUpsertArgs<ExtArgs>>
    ): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiCountArgs} args - Arguments to filter Transaksis to count.
     * @example
     * // Count the number of Transaksis
     * const count = await prisma.transaksi.count({
     *   where: {
     *     // ... the filter for the Transaksis we want to count
     *   }
     * })
    **/
    count<T extends TransaksiCountArgs>(
      args?: Subset<T, TransaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaksiAggregateArgs>(args: Subset<T, TransaksiAggregateArgs>): Prisma.PrismaPromise<GetTransaksiAggregateType<T>>

    /**
     * Group by Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiGroupByArgs} args - Group by arguments.
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
      T extends TransaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransaksiGroupByArgs['orderBy'] }
        : { orderBy?: TransaksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaksi model
   */
  readonly fields: TransaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    kendaraan<T extends KendaraanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KendaraanDefaultArgs<ExtArgs>>): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Transaksi model
   */ 
  interface TransaksiFieldRefs {
    readonly transaksiId: FieldRef<"Transaksi", 'String'>
    readonly kendaraan_plat: FieldRef<"Transaksi", 'String'>
    readonly customer_id: FieldRef<"Transaksi", 'String'>
    readonly tgl_mulai_sewa: FieldRef<"Transaksi", 'DateTime'>
    readonly tgl_selesai_sewa: FieldRef<"Transaksi", 'DateTime'>
    readonly total_harga: FieldRef<"Transaksi", 'Decimal'>
    readonly deskripsi: FieldRef<"Transaksi", 'String'>
    readonly url_foto: FieldRef<"Transaksi", 'String'>
    readonly createdAt: FieldRef<"Transaksi", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaksi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaksi findUnique
   */
  export type TransaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi findUniqueOrThrow
   */
  export type TransaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi findFirst
   */
  export type TransaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi findFirstOrThrow
   */
  export type TransaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi findMany
   */
  export type TransaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksis to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi create
   */
  export type TransaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaksi.
     */
    data: XOR<TransaksiCreateInput, TransaksiUncheckedCreateInput>
  }

  /**
   * Transaksi createMany
   */
  export type TransaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transaksis.
     */
    data: TransaksiCreateManyInput | TransaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaksi createManyAndReturn
   */
  export type TransaksiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data used to create many Transaksis.
     */
    data: TransaksiCreateManyInput | TransaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaksi update
   */
  export type TransaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaksi.
     */
    data: XOR<TransaksiUpdateInput, TransaksiUncheckedUpdateInput>
    /**
     * Choose, which Transaksi to update.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi updateMany
   */
  export type TransaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transaksis.
     */
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyInput>
    /**
     * Filter which Transaksis to update
     */
    where?: TransaksiWhereInput
  }

  /**
   * Transaksi upsert
   */
  export type TransaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaksi to update in case it exists.
     */
    where: TransaksiWhereUniqueInput
    /**
     * In case the Transaksi found by the `where` argument doesn't exist, create a new Transaksi with this data.
     */
    create: XOR<TransaksiCreateInput, TransaksiUncheckedCreateInput>
    /**
     * In case the Transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransaksiUpdateInput, TransaksiUncheckedUpdateInput>
  }

  /**
   * Transaksi delete
   */
  export type TransaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter which Transaksi to delete.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi deleteMany
   */
  export type TransaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaksis to delete
     */
    where?: TransaksiWhereInput
  }

  /**
   * Transaksi without action
   */
  export type TransaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
  }


  /**
   * Model Foto
   */

  export type AggregateFoto = {
    _count: FotoCountAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  export type FotoMinAggregateOutputType = {
    image_id: string | null
    title: string | null
    image: string | null
    kendaraan_plat: string | null
  }

  export type FotoMaxAggregateOutputType = {
    image_id: string | null
    title: string | null
    image: string | null
    kendaraan_plat: string | null
  }

  export type FotoCountAggregateOutputType = {
    image_id: number
    title: number
    image: number
    kendaraan_plat: number
    _all: number
  }


  export type FotoMinAggregateInputType = {
    image_id?: true
    title?: true
    image?: true
    kendaraan_plat?: true
  }

  export type FotoMaxAggregateInputType = {
    image_id?: true
    title?: true
    image?: true
    kendaraan_plat?: true
  }

  export type FotoCountAggregateInputType = {
    image_id?: true
    title?: true
    image?: true
    kendaraan_plat?: true
    _all?: true
  }

  export type FotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foto to aggregate.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fotos
    **/
    _count?: true | FotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoMaxAggregateInputType
  }

  export type GetFotoAggregateType<T extends FotoAggregateArgs> = {
        [P in keyof T & keyof AggregateFoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoto[P]>
      : GetScalarType<T[P], AggregateFoto[P]>
  }




  export type FotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithAggregationInput | FotoOrderByWithAggregationInput[]
    by: FotoScalarFieldEnum[] | FotoScalarFieldEnum
    having?: FotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoCountAggregateInputType | true
    _min?: FotoMinAggregateInputType
    _max?: FotoMaxAggregateInputType
  }

  export type FotoGroupByOutputType = {
    image_id: string
    title: string
    image: string
    kendaraan_plat: string
    _count: FotoCountAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  type GetFotoGroupByPayload<T extends FotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoGroupByOutputType[P]>
            : GetScalarType<T[P], FotoGroupByOutputType[P]>
        }
      >
    >


  export type FotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    title?: boolean
    image?: boolean
    kendaraan_plat?: boolean
    kendaraan?: boolean | KendaraanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>

  export type FotoSelectScalar = {
    image_id?: boolean
    title?: boolean
    image?: boolean
    kendaraan_plat?: boolean
  }


  export type FotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kendaraan?: boolean | KendaraanDefaultArgs<ExtArgs>
  }


  export type $FotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Foto"
    objects: {
      kendaraan: Prisma.$KendaraanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      image_id: string
      title: string
      image: string
      kendaraan_plat: string
    }, ExtArgs["result"]["foto"]>
    composites: {}
  }


  type FotoGetPayload<S extends boolean | null | undefined | FotoDefaultArgs> = $Result.GetResult<Prisma.$FotoPayload, S>

  type FotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FotoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FotoCountAggregateInputType | true
    }

  export interface FotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Foto'], meta: { name: 'Foto' } }
    /**
     * Find zero or one Foto that matches the filter.
     * @param {FotoFindUniqueArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FotoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FotoFindUniqueArgs<ExtArgs>>
    ): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Foto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FotoFindUniqueOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FotoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FotoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Foto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FotoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FotoFindFirstArgs<ExtArgs>>
    ): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Foto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FotoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FotoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fotos
     * const fotos = await prisma.foto.findMany()
     * 
     * // Get first 10 Fotos
     * const fotos = await prisma.foto.findMany({ take: 10 })
     * 
     * // Only select the `image_id`
     * const fotoWithImage_idOnly = await prisma.foto.findMany({ select: { image_id: true } })
     * 
    **/
    findMany<T extends FotoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FotoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Foto.
     * @param {FotoCreateArgs} args - Arguments to create a Foto.
     * @example
     * // Create one Foto
     * const Foto = await prisma.foto.create({
     *   data: {
     *     // ... data to create a Foto
     *   }
     * })
     * 
    **/
    create<T extends FotoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FotoCreateArgs<ExtArgs>>
    ): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fotos.
     * @param {FotoCreateManyArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const foto = await prisma.foto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends FotoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FotoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fotos and returns the data saved in the database.
     * @param {FotoCreateManyAndReturnArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const foto = await prisma.foto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fotos and only return the `image_id`
     * const fotoWithImage_idOnly = await prisma.foto.createManyAndReturn({ 
     *   select: { image_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends FotoCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, FotoCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Foto.
     * @param {FotoDeleteArgs} args - Arguments to delete one Foto.
     * @example
     * // Delete one Foto
     * const Foto = await prisma.foto.delete({
     *   where: {
     *     // ... filter to delete one Foto
     *   }
     * })
     * 
    **/
    delete<T extends FotoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FotoDeleteArgs<ExtArgs>>
    ): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Foto.
     * @param {FotoUpdateArgs} args - Arguments to update one Foto.
     * @example
     * // Update one Foto
     * const foto = await prisma.foto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FotoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FotoUpdateArgs<ExtArgs>>
    ): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fotos.
     * @param {FotoDeleteManyArgs} args - Arguments to filter Fotos to delete.
     * @example
     * // Delete a few Fotos
     * const { count } = await prisma.foto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FotoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FotoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fotos
     * const foto = await prisma.foto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FotoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FotoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Foto.
     * @param {FotoUpsertArgs} args - Arguments to update or create a Foto.
     * @example
     * // Update or create a Foto
     * const foto = await prisma.foto.upsert({
     *   create: {
     *     // ... data to create a Foto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foto we want to update
     *   }
     * })
    **/
    upsert<T extends FotoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FotoUpsertArgs<ExtArgs>>
    ): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoCountArgs} args - Arguments to filter Fotos to count.
     * @example
     * // Count the number of Fotos
     * const count = await prisma.foto.count({
     *   where: {
     *     // ... the filter for the Fotos we want to count
     *   }
     * })
    **/
    count<T extends FotoCountArgs>(
      args?: Subset<T, FotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotoAggregateArgs>(args: Subset<T, FotoAggregateArgs>): Prisma.PrismaPromise<GetFotoAggregateType<T>>

    /**
     * Group by Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGroupByArgs} args - Group by arguments.
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
      T extends FotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoGroupByArgs['orderBy'] }
        : { orderBy?: FotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Foto model
   */
  readonly fields: FotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Foto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    kendaraan<T extends KendaraanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KendaraanDefaultArgs<ExtArgs>>): Prisma__KendaraanClient<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Foto model
   */ 
  interface FotoFieldRefs {
    readonly image_id: FieldRef<"Foto", 'String'>
    readonly title: FieldRef<"Foto", 'String'>
    readonly image: FieldRef<"Foto", 'String'>
    readonly kendaraan_plat: FieldRef<"Foto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Foto findUnique
   */
  export type FotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findUniqueOrThrow
   */
  export type FotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findFirst
   */
  export type FotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findFirstOrThrow
   */
  export type FotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findMany
   */
  export type FotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Fotos to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto create
   */
  export type FotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Foto.
     */
    data: XOR<FotoCreateInput, FotoUncheckedCreateInput>
  }

  /**
   * Foto createMany
   */
  export type FotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fotos.
     */
    data: FotoCreateManyInput | FotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Foto createManyAndReturn
   */
  export type FotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data used to create many Fotos.
     */
    data: FotoCreateManyInput | FotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Foto update
   */
  export type FotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Foto.
     */
    data: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
    /**
     * Choose, which Foto to update.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto updateMany
   */
  export type FotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fotos.
     */
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyInput>
    /**
     * Filter which Fotos to update
     */
    where?: FotoWhereInput
  }

  /**
   * Foto upsert
   */
  export type FotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Foto to update in case it exists.
     */
    where: FotoWhereUniqueInput
    /**
     * In case the Foto found by the `where` argument doesn't exist, create a new Foto with this data.
     */
    create: XOR<FotoCreateInput, FotoUncheckedCreateInput>
    /**
     * In case the Foto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
  }

  /**
   * Foto delete
   */
  export type FotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter which Foto to delete.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto deleteMany
   */
  export type FotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fotos to delete
     */
    where?: FotoWhereInput
  }

  /**
   * Foto without action
   */
  export type FotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
  }


  /**
   * Model Jenis
   */

  export type AggregateJenis = {
    _count: JenisCountAggregateOutputType | null
    _min: JenisMinAggregateOutputType | null
    _max: JenisMaxAggregateOutputType | null
  }

  export type JenisMinAggregateOutputType = {
    id: string | null
    jenis: string | null
    created_at: Date | null
  }

  export type JenisMaxAggregateOutputType = {
    id: string | null
    jenis: string | null
    created_at: Date | null
  }

  export type JenisCountAggregateOutputType = {
    id: number
    jenis: number
    created_at: number
    _all: number
  }


  export type JenisMinAggregateInputType = {
    id?: true
    jenis?: true
    created_at?: true
  }

  export type JenisMaxAggregateInputType = {
    id?: true
    jenis?: true
    created_at?: true
  }

  export type JenisCountAggregateInputType = {
    id?: true
    jenis?: true
    created_at?: true
    _all?: true
  }

  export type JenisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jenis to aggregate.
     */
    where?: JenisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jenis to fetch.
     */
    orderBy?: JenisOrderByWithRelationInput | JenisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JenisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jenis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jenis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jenis
    **/
    _count?: true | JenisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JenisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JenisMaxAggregateInputType
  }

  export type GetJenisAggregateType<T extends JenisAggregateArgs> = {
        [P in keyof T & keyof AggregateJenis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJenis[P]>
      : GetScalarType<T[P], AggregateJenis[P]>
  }




  export type JenisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JenisWhereInput
    orderBy?: JenisOrderByWithAggregationInput | JenisOrderByWithAggregationInput[]
    by: JenisScalarFieldEnum[] | JenisScalarFieldEnum
    having?: JenisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JenisCountAggregateInputType | true
    _min?: JenisMinAggregateInputType
    _max?: JenisMaxAggregateInputType
  }

  export type JenisGroupByOutputType = {
    id: string
    jenis: string
    created_at: Date
    _count: JenisCountAggregateOutputType | null
    _min: JenisMinAggregateOutputType | null
    _max: JenisMaxAggregateOutputType | null
  }

  type GetJenisGroupByPayload<T extends JenisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JenisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JenisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JenisGroupByOutputType[P]>
            : GetScalarType<T[P], JenisGroupByOutputType[P]>
        }
      >
    >


  export type JenisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jenis?: boolean
    created_at?: boolean
    kendaraan?: boolean | Jenis$kendaraanArgs<ExtArgs>
    _count?: boolean | JenisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jenis"]>

  export type JenisSelectScalar = {
    id?: boolean
    jenis?: boolean
    created_at?: boolean
  }


  export type JenisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kendaraan?: boolean | Jenis$kendaraanArgs<ExtArgs>
    _count?: boolean | JenisCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $JenisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jenis"
    objects: {
      kendaraan: Prisma.$KendaraanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jenis: string
      created_at: Date
    }, ExtArgs["result"]["jenis"]>
    composites: {}
  }


  type JenisGetPayload<S extends boolean | null | undefined | JenisDefaultArgs> = $Result.GetResult<Prisma.$JenisPayload, S>

  type JenisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JenisFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JenisCountAggregateInputType | true
    }

  export interface JenisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jenis'], meta: { name: 'Jenis' } }
    /**
     * Find zero or one Jenis that matches the filter.
     * @param {JenisFindUniqueArgs} args - Arguments to find a Jenis
     * @example
     * // Get one Jenis
     * const jenis = await prisma.jenis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JenisFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JenisFindUniqueArgs<ExtArgs>>
    ): Prisma__JenisClient<$Result.GetResult<Prisma.$JenisPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Jenis that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JenisFindUniqueOrThrowArgs} args - Arguments to find a Jenis
     * @example
     * // Get one Jenis
     * const jenis = await prisma.jenis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JenisFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JenisFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JenisClient<$Result.GetResult<Prisma.$JenisPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Jenis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisFindFirstArgs} args - Arguments to find a Jenis
     * @example
     * // Get one Jenis
     * const jenis = await prisma.jenis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JenisFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JenisFindFirstArgs<ExtArgs>>
    ): Prisma__JenisClient<$Result.GetResult<Prisma.$JenisPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Jenis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisFindFirstOrThrowArgs} args - Arguments to find a Jenis
     * @example
     * // Get one Jenis
     * const jenis = await prisma.jenis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JenisFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JenisFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JenisClient<$Result.GetResult<Prisma.$JenisPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jenis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jenis
     * const jenis = await prisma.jenis.findMany()
     * 
     * // Get first 10 Jenis
     * const jenis = await prisma.jenis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jenisWithIdOnly = await prisma.jenis.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JenisFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JenisFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Jenis.
     * @param {JenisCreateArgs} args - Arguments to create a Jenis.
     * @example
     * // Create one Jenis
     * const Jenis = await prisma.jenis.create({
     *   data: {
     *     // ... data to create a Jenis
     *   }
     * })
     * 
    **/
    create<T extends JenisCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JenisCreateArgs<ExtArgs>>
    ): Prisma__JenisClient<$Result.GetResult<Prisma.$JenisPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jenis.
     * @param {JenisCreateManyArgs} args - Arguments to create many Jenis.
     * @example
     * // Create many Jenis
     * const jenis = await prisma.jenis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends JenisCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JenisCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jenis and returns the data saved in the database.
     * @param {JenisCreateManyAndReturnArgs} args - Arguments to create many Jenis.
     * @example
     * // Create many Jenis
     * const jenis = await prisma.jenis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jenis and only return the `id`
     * const jenisWithIdOnly = await prisma.jenis.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends JenisCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, JenisCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Jenis.
     * @param {JenisDeleteArgs} args - Arguments to delete one Jenis.
     * @example
     * // Delete one Jenis
     * const Jenis = await prisma.jenis.delete({
     *   where: {
     *     // ... filter to delete one Jenis
     *   }
     * })
     * 
    **/
    delete<T extends JenisDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JenisDeleteArgs<ExtArgs>>
    ): Prisma__JenisClient<$Result.GetResult<Prisma.$JenisPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Jenis.
     * @param {JenisUpdateArgs} args - Arguments to update one Jenis.
     * @example
     * // Update one Jenis
     * const jenis = await prisma.jenis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JenisUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JenisUpdateArgs<ExtArgs>>
    ): Prisma__JenisClient<$Result.GetResult<Prisma.$JenisPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jenis.
     * @param {JenisDeleteManyArgs} args - Arguments to filter Jenis to delete.
     * @example
     * // Delete a few Jenis
     * const { count } = await prisma.jenis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JenisDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JenisDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jenis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jenis
     * const jenis = await prisma.jenis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JenisUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JenisUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jenis.
     * @param {JenisUpsertArgs} args - Arguments to update or create a Jenis.
     * @example
     * // Update or create a Jenis
     * const jenis = await prisma.jenis.upsert({
     *   create: {
     *     // ... data to create a Jenis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jenis we want to update
     *   }
     * })
    **/
    upsert<T extends JenisUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JenisUpsertArgs<ExtArgs>>
    ): Prisma__JenisClient<$Result.GetResult<Prisma.$JenisPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jenis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisCountArgs} args - Arguments to filter Jenis to count.
     * @example
     * // Count the number of Jenis
     * const count = await prisma.jenis.count({
     *   where: {
     *     // ... the filter for the Jenis we want to count
     *   }
     * })
    **/
    count<T extends JenisCountArgs>(
      args?: Subset<T, JenisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JenisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jenis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JenisAggregateArgs>(args: Subset<T, JenisAggregateArgs>): Prisma.PrismaPromise<GetJenisAggregateType<T>>

    /**
     * Group by Jenis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisGroupByArgs} args - Group by arguments.
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
      T extends JenisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JenisGroupByArgs['orderBy'] }
        : { orderBy?: JenisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JenisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJenisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jenis model
   */
  readonly fields: JenisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jenis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JenisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    kendaraan<T extends Jenis$kendaraanArgs<ExtArgs> = {}>(args?: Subset<T, Jenis$kendaraanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KendaraanPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Jenis model
   */ 
  interface JenisFieldRefs {
    readonly id: FieldRef<"Jenis", 'String'>
    readonly jenis: FieldRef<"Jenis", 'String'>
    readonly created_at: FieldRef<"Jenis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Jenis findUnique
   */
  export type JenisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenis
     */
    select?: JenisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisInclude<ExtArgs> | null
    /**
     * Filter, which Jenis to fetch.
     */
    where: JenisWhereUniqueInput
  }

  /**
   * Jenis findUniqueOrThrow
   */
  export type JenisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenis
     */
    select?: JenisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisInclude<ExtArgs> | null
    /**
     * Filter, which Jenis to fetch.
     */
    where: JenisWhereUniqueInput
  }

  /**
   * Jenis findFirst
   */
  export type JenisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenis
     */
    select?: JenisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisInclude<ExtArgs> | null
    /**
     * Filter, which Jenis to fetch.
     */
    where?: JenisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jenis to fetch.
     */
    orderBy?: JenisOrderByWithRelationInput | JenisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jenis.
     */
    cursor?: JenisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jenis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jenis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jenis.
     */
    distinct?: JenisScalarFieldEnum | JenisScalarFieldEnum[]
  }

  /**
   * Jenis findFirstOrThrow
   */
  export type JenisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenis
     */
    select?: JenisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisInclude<ExtArgs> | null
    /**
     * Filter, which Jenis to fetch.
     */
    where?: JenisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jenis to fetch.
     */
    orderBy?: JenisOrderByWithRelationInput | JenisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jenis.
     */
    cursor?: JenisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jenis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jenis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jenis.
     */
    distinct?: JenisScalarFieldEnum | JenisScalarFieldEnum[]
  }

  /**
   * Jenis findMany
   */
  export type JenisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenis
     */
    select?: JenisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisInclude<ExtArgs> | null
    /**
     * Filter, which Jenis to fetch.
     */
    where?: JenisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jenis to fetch.
     */
    orderBy?: JenisOrderByWithRelationInput | JenisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jenis.
     */
    cursor?: JenisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jenis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jenis.
     */
    skip?: number
    distinct?: JenisScalarFieldEnum | JenisScalarFieldEnum[]
  }

  /**
   * Jenis create
   */
  export type JenisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenis
     */
    select?: JenisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisInclude<ExtArgs> | null
    /**
     * The data needed to create a Jenis.
     */
    data: XOR<JenisCreateInput, JenisUncheckedCreateInput>
  }

  /**
   * Jenis createMany
   */
  export type JenisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jenis.
     */
    data: JenisCreateManyInput | JenisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jenis createManyAndReturn
   */
  export type JenisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenis
     */
    select?: JenisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisInclude<ExtArgs> | null
    /**
     * The data used to create many Jenis.
     */
    data: JenisCreateManyInput | JenisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jenis update
   */
  export type JenisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenis
     */
    select?: JenisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisInclude<ExtArgs> | null
    /**
     * The data needed to update a Jenis.
     */
    data: XOR<JenisUpdateInput, JenisUncheckedUpdateInput>
    /**
     * Choose, which Jenis to update.
     */
    where: JenisWhereUniqueInput
  }

  /**
   * Jenis updateMany
   */
  export type JenisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jenis.
     */
    data: XOR<JenisUpdateManyMutationInput, JenisUncheckedUpdateManyInput>
    /**
     * Filter which Jenis to update
     */
    where?: JenisWhereInput
  }

  /**
   * Jenis upsert
   */
  export type JenisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenis
     */
    select?: JenisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisInclude<ExtArgs> | null
    /**
     * The filter to search for the Jenis to update in case it exists.
     */
    where: JenisWhereUniqueInput
    /**
     * In case the Jenis found by the `where` argument doesn't exist, create a new Jenis with this data.
     */
    create: XOR<JenisCreateInput, JenisUncheckedCreateInput>
    /**
     * In case the Jenis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JenisUpdateInput, JenisUncheckedUpdateInput>
  }

  /**
   * Jenis delete
   */
  export type JenisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenis
     */
    select?: JenisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisInclude<ExtArgs> | null
    /**
     * Filter which Jenis to delete.
     */
    where: JenisWhereUniqueInput
  }

  /**
   * Jenis deleteMany
   */
  export type JenisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jenis to delete
     */
    where?: JenisWhereInput
  }

  /**
   * Jenis.kendaraan
   */
  export type Jenis$kendaraanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kendaraan
     */
    select?: KendaraanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KendaraanInclude<ExtArgs> | null
    where?: KendaraanWhereInput
    orderBy?: KendaraanOrderByWithRelationInput | KendaraanOrderByWithRelationInput[]
    cursor?: KendaraanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KendaraanScalarFieldEnum | KendaraanScalarFieldEnum[]
  }

  /**
   * Jenis without action
   */
  export type JenisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jenis
     */
    select?: JenisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JenisInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }



  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Pegawai
   */

  export type AggregatePegawai = {
    _count: PegawaiCountAggregateOutputType | null
    _avg: PegawaiAvgAggregateOutputType | null
    _sum: PegawaiSumAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  export type PegawaiAvgAggregateOutputType = {
    umur: number | null
  }

  export type PegawaiSumAggregateOutputType = {
    umur: number | null
  }

  export type PegawaiMinAggregateOutputType = {
    id: string | null
    nama: string | null
    umur: number | null
    alamat: string | null
    no_hp: string | null
    gaji: string | null
  }

  export type PegawaiMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    umur: number | null
    alamat: string | null
    no_hp: string | null
    gaji: string | null
  }

  export type PegawaiCountAggregateOutputType = {
    id: number
    nama: number
    umur: number
    alamat: number
    no_hp: number
    gaji: number
    _all: number
  }


  export type PegawaiAvgAggregateInputType = {
    umur?: true
  }

  export type PegawaiSumAggregateInputType = {
    umur?: true
  }

  export type PegawaiMinAggregateInputType = {
    id?: true
    nama?: true
    umur?: true
    alamat?: true
    no_hp?: true
    gaji?: true
  }

  export type PegawaiMaxAggregateInputType = {
    id?: true
    nama?: true
    umur?: true
    alamat?: true
    no_hp?: true
    gaji?: true
  }

  export type PegawaiCountAggregateInputType = {
    id?: true
    nama?: true
    umur?: true
    alamat?: true
    no_hp?: true
    gaji?: true
    _all?: true
  }

  export type PegawaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pegawai to aggregate.
     */
    where?: PegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pegawais to fetch.
     */
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pegawais
    **/
    _count?: true | PegawaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PegawaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PegawaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PegawaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PegawaiMaxAggregateInputType
  }

  export type GetPegawaiAggregateType<T extends PegawaiAggregateArgs> = {
        [P in keyof T & keyof AggregatePegawai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePegawai[P]>
      : GetScalarType<T[P], AggregatePegawai[P]>
  }




  export type PegawaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PegawaiWhereInput
    orderBy?: PegawaiOrderByWithAggregationInput | PegawaiOrderByWithAggregationInput[]
    by: PegawaiScalarFieldEnum[] | PegawaiScalarFieldEnum
    having?: PegawaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PegawaiCountAggregateInputType | true
    _avg?: PegawaiAvgAggregateInputType
    _sum?: PegawaiSumAggregateInputType
    _min?: PegawaiMinAggregateInputType
    _max?: PegawaiMaxAggregateInputType
  }

  export type PegawaiGroupByOutputType = {
    id: string
    nama: string
    umur: number
    alamat: string
    no_hp: string
    gaji: string
    _count: PegawaiCountAggregateOutputType | null
    _avg: PegawaiAvgAggregateOutputType | null
    _sum: PegawaiSumAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  type GetPegawaiGroupByPayload<T extends PegawaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PegawaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PegawaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PegawaiGroupByOutputType[P]>
            : GetScalarType<T[P], PegawaiGroupByOutputType[P]>
        }
      >
    >


  export type PegawaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    umur?: boolean
    alamat?: boolean
    no_hp?: boolean
    gaji?: boolean
  }, ExtArgs["result"]["pegawai"]>

  export type PegawaiSelectScalar = {
    id?: boolean
    nama?: boolean
    umur?: boolean
    alamat?: boolean
    no_hp?: boolean
    gaji?: boolean
  }



  export type $PegawaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pegawai"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      umur: number
      alamat: string
      no_hp: string
      gaji: string
    }, ExtArgs["result"]["pegawai"]>
    composites: {}
  }


  type PegawaiGetPayload<S extends boolean | null | undefined | PegawaiDefaultArgs> = $Result.GetResult<Prisma.$PegawaiPayload, S>

  type PegawaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PegawaiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PegawaiCountAggregateInputType | true
    }

  export interface PegawaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pegawai'], meta: { name: 'Pegawai' } }
    /**
     * Find zero or one Pegawai that matches the filter.
     * @param {PegawaiFindUniqueArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PegawaiFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PegawaiFindUniqueArgs<ExtArgs>>
    ): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pegawai that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PegawaiFindUniqueOrThrowArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PegawaiFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PegawaiFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pegawai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiFindFirstArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PegawaiFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PegawaiFindFirstArgs<ExtArgs>>
    ): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pegawai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiFindFirstOrThrowArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PegawaiFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PegawaiFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pegawais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pegawais
     * const pegawais = await prisma.pegawai.findMany()
     * 
     * // Get first 10 Pegawais
     * const pegawais = await prisma.pegawai.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pegawaiWithIdOnly = await prisma.pegawai.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PegawaiFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PegawaiFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pegawai.
     * @param {PegawaiCreateArgs} args - Arguments to create a Pegawai.
     * @example
     * // Create one Pegawai
     * const Pegawai = await prisma.pegawai.create({
     *   data: {
     *     // ... data to create a Pegawai
     *   }
     * })
     * 
    **/
    create<T extends PegawaiCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PegawaiCreateArgs<ExtArgs>>
    ): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pegawais.
     * @param {PegawaiCreateManyArgs} args - Arguments to create many Pegawais.
     * @example
     * // Create many Pegawais
     * const pegawai = await prisma.pegawai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PegawaiCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PegawaiCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pegawais and returns the data saved in the database.
     * @param {PegawaiCreateManyAndReturnArgs} args - Arguments to create many Pegawais.
     * @example
     * // Create many Pegawais
     * const pegawai = await prisma.pegawai.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pegawais and only return the `id`
     * const pegawaiWithIdOnly = await prisma.pegawai.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PegawaiCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PegawaiCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Pegawai.
     * @param {PegawaiDeleteArgs} args - Arguments to delete one Pegawai.
     * @example
     * // Delete one Pegawai
     * const Pegawai = await prisma.pegawai.delete({
     *   where: {
     *     // ... filter to delete one Pegawai
     *   }
     * })
     * 
    **/
    delete<T extends PegawaiDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PegawaiDeleteArgs<ExtArgs>>
    ): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pegawai.
     * @param {PegawaiUpdateArgs} args - Arguments to update one Pegawai.
     * @example
     * // Update one Pegawai
     * const pegawai = await prisma.pegawai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PegawaiUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PegawaiUpdateArgs<ExtArgs>>
    ): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pegawais.
     * @param {PegawaiDeleteManyArgs} args - Arguments to filter Pegawais to delete.
     * @example
     * // Delete a few Pegawais
     * const { count } = await prisma.pegawai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PegawaiDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PegawaiDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pegawais
     * const pegawai = await prisma.pegawai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PegawaiUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PegawaiUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pegawai.
     * @param {PegawaiUpsertArgs} args - Arguments to update or create a Pegawai.
     * @example
     * // Update or create a Pegawai
     * const pegawai = await prisma.pegawai.upsert({
     *   create: {
     *     // ... data to create a Pegawai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pegawai we want to update
     *   }
     * })
    **/
    upsert<T extends PegawaiUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PegawaiUpsertArgs<ExtArgs>>
    ): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiCountArgs} args - Arguments to filter Pegawais to count.
     * @example
     * // Count the number of Pegawais
     * const count = await prisma.pegawai.count({
     *   where: {
     *     // ... the filter for the Pegawais we want to count
     *   }
     * })
    **/
    count<T extends PegawaiCountArgs>(
      args?: Subset<T, PegawaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PegawaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PegawaiAggregateArgs>(args: Subset<T, PegawaiAggregateArgs>): Prisma.PrismaPromise<GetPegawaiAggregateType<T>>

    /**
     * Group by Pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiGroupByArgs} args - Group by arguments.
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
      T extends PegawaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PegawaiGroupByArgs['orderBy'] }
        : { orderBy?: PegawaiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PegawaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPegawaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pegawai model
   */
  readonly fields: PegawaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pegawai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PegawaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Pegawai model
   */ 
  interface PegawaiFieldRefs {
    readonly id: FieldRef<"Pegawai", 'String'>
    readonly nama: FieldRef<"Pegawai", 'String'>
    readonly umur: FieldRef<"Pegawai", 'Int'>
    readonly alamat: FieldRef<"Pegawai", 'String'>
    readonly no_hp: FieldRef<"Pegawai", 'String'>
    readonly gaji: FieldRef<"Pegawai", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pegawai findUnique
   */
  export type PegawaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Filter, which Pegawai to fetch.
     */
    where: PegawaiWhereUniqueInput
  }

  /**
   * Pegawai findUniqueOrThrow
   */
  export type PegawaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Filter, which Pegawai to fetch.
     */
    where: PegawaiWhereUniqueInput
  }

  /**
   * Pegawai findFirst
   */
  export type PegawaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Filter, which Pegawai to fetch.
     */
    where?: PegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pegawais to fetch.
     */
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pegawais.
     */
    cursor?: PegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pegawais.
     */
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * Pegawai findFirstOrThrow
   */
  export type PegawaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Filter, which Pegawai to fetch.
     */
    where?: PegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pegawais to fetch.
     */
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pegawais.
     */
    cursor?: PegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pegawais.
     */
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * Pegawai findMany
   */
  export type PegawaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Filter, which Pegawais to fetch.
     */
    where?: PegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pegawais to fetch.
     */
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pegawais.
     */
    cursor?: PegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pegawais.
     */
    skip?: number
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * Pegawai create
   */
  export type PegawaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * The data needed to create a Pegawai.
     */
    data: XOR<PegawaiCreateInput, PegawaiUncheckedCreateInput>
  }

  /**
   * Pegawai createMany
   */
  export type PegawaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pegawais.
     */
    data: PegawaiCreateManyInput | PegawaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pegawai createManyAndReturn
   */
  export type PegawaiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * The data used to create many Pegawais.
     */
    data: PegawaiCreateManyInput | PegawaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pegawai update
   */
  export type PegawaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * The data needed to update a Pegawai.
     */
    data: XOR<PegawaiUpdateInput, PegawaiUncheckedUpdateInput>
    /**
     * Choose, which Pegawai to update.
     */
    where: PegawaiWhereUniqueInput
  }

  /**
   * Pegawai updateMany
   */
  export type PegawaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pegawais.
     */
    data: XOR<PegawaiUpdateManyMutationInput, PegawaiUncheckedUpdateManyInput>
    /**
     * Filter which Pegawais to update
     */
    where?: PegawaiWhereInput
  }

  /**
   * Pegawai upsert
   */
  export type PegawaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * The filter to search for the Pegawai to update in case it exists.
     */
    where: PegawaiWhereUniqueInput
    /**
     * In case the Pegawai found by the `where` argument doesn't exist, create a new Pegawai with this data.
     */
    create: XOR<PegawaiCreateInput, PegawaiUncheckedCreateInput>
    /**
     * In case the Pegawai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PegawaiUpdateInput, PegawaiUncheckedUpdateInput>
  }

  /**
   * Pegawai delete
   */
  export type PegawaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Filter which Pegawai to delete.
     */
    where: PegawaiWhereUniqueInput
  }

  /**
   * Pegawai deleteMany
   */
  export type PegawaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pegawais to delete
     */
    where?: PegawaiWhereInput
  }

  /**
   * Pegawai without action
   */
  export type PegawaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
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


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    alamat: 'alamat',
    hp: 'hp',
    nik: 'nik',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const KendaraanScalarFieldEnum: {
    plat: 'plat',
    merk: 'merk',
    warna: 'warna',
    tahun: 'tahun',
    bahan_bakar: 'bahan_bakar',
    cc: 'cc',
    harga_sewa: 'harga_sewa',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    jenisKendaraan: 'jenisKendaraan'
  };

  export type KendaraanScalarFieldEnum = (typeof KendaraanScalarFieldEnum)[keyof typeof KendaraanScalarFieldEnum]


  export const TransaksiScalarFieldEnum: {
    transaksiId: 'transaksiId',
    kendaraan_plat: 'kendaraan_plat',
    customer_id: 'customer_id',
    tgl_mulai_sewa: 'tgl_mulai_sewa',
    tgl_selesai_sewa: 'tgl_selesai_sewa',
    total_harga: 'total_harga',
    deskripsi: 'deskripsi',
    url_foto: 'url_foto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransaksiScalarFieldEnum = (typeof TransaksiScalarFieldEnum)[keyof typeof TransaksiScalarFieldEnum]


  export const FotoScalarFieldEnum: {
    image_id: 'image_id',
    title: 'title',
    image: 'image',
    kendaraan_plat: 'kendaraan_plat'
  };

  export type FotoScalarFieldEnum = (typeof FotoScalarFieldEnum)[keyof typeof FotoScalarFieldEnum]


  export const JenisScalarFieldEnum: {
    id: 'id',
    jenis: 'jenis',
    created_at: 'created_at'
  };

  export type JenisScalarFieldEnum = (typeof JenisScalarFieldEnum)[keyof typeof JenisScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PegawaiScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    umur: 'umur',
    alamat: 'alamat',
    no_hp: 'no_hp',
    gaji: 'gaji'
  };

  export type PegawaiScalarFieldEnum = (typeof PegawaiScalarFieldEnum)[keyof typeof PegawaiScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    name?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    name?: StringWithAggregatesFilter<"Contact"> | string
    phone?: StringWithAggregatesFilter<"Contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    alamat?: StringFilter<"Customer"> | string
    hp?: StringFilter<"Customer"> | string
    nik?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    transaksi?: TransaksiListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    alamat?: SortOrder
    hp?: SortOrder
    nik?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaksi?: TransaksiOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    alamat?: StringFilter<"Customer"> | string
    hp?: StringFilter<"Customer"> | string
    nik?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    transaksi?: TransaksiListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    alamat?: SortOrder
    hp?: SortOrder
    nik?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    alamat?: StringWithAggregatesFilter<"Customer"> | string
    hp?: StringWithAggregatesFilter<"Customer"> | string
    nik?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type KendaraanWhereInput = {
    AND?: KendaraanWhereInput | KendaraanWhereInput[]
    OR?: KendaraanWhereInput[]
    NOT?: KendaraanWhereInput | KendaraanWhereInput[]
    plat?: StringFilter<"Kendaraan"> | string
    merk?: StringFilter<"Kendaraan"> | string
    warna?: StringFilter<"Kendaraan"> | string
    tahun?: StringFilter<"Kendaraan"> | string
    bahan_bakar?: StringFilter<"Kendaraan"> | string
    cc?: IntFilter<"Kendaraan"> | number
    harga_sewa?: DecimalFilter<"Kendaraan"> | Decimal | DecimalJsLike | number | string
    status?: BoolFilter<"Kendaraan"> | boolean
    createdAt?: DateTimeFilter<"Kendaraan"> | Date | string
    updatedAt?: DateTimeFilter<"Kendaraan"> | Date | string
    jenisKendaraan?: StringFilter<"Kendaraan"> | string
    jenis?: XOR<JenisRelationFilter, JenisWhereInput>
    foto?: FotoListRelationFilter
    transaksi?: TransaksiListRelationFilter
  }

  export type KendaraanOrderByWithRelationInput = {
    plat?: SortOrder
    merk?: SortOrder
    warna?: SortOrder
    tahun?: SortOrder
    bahan_bakar?: SortOrder
    cc?: SortOrder
    harga_sewa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jenisKendaraan?: SortOrder
    jenis?: JenisOrderByWithRelationInput
    foto?: FotoOrderByRelationAggregateInput
    transaksi?: TransaksiOrderByRelationAggregateInput
  }

  export type KendaraanWhereUniqueInput = Prisma.AtLeast<{
    plat?: string
    AND?: KendaraanWhereInput | KendaraanWhereInput[]
    OR?: KendaraanWhereInput[]
    NOT?: KendaraanWhereInput | KendaraanWhereInput[]
    merk?: StringFilter<"Kendaraan"> | string
    warna?: StringFilter<"Kendaraan"> | string
    tahun?: StringFilter<"Kendaraan"> | string
    bahan_bakar?: StringFilter<"Kendaraan"> | string
    cc?: IntFilter<"Kendaraan"> | number
    harga_sewa?: DecimalFilter<"Kendaraan"> | Decimal | DecimalJsLike | number | string
    status?: BoolFilter<"Kendaraan"> | boolean
    createdAt?: DateTimeFilter<"Kendaraan"> | Date | string
    updatedAt?: DateTimeFilter<"Kendaraan"> | Date | string
    jenisKendaraan?: StringFilter<"Kendaraan"> | string
    jenis?: XOR<JenisRelationFilter, JenisWhereInput>
    foto?: FotoListRelationFilter
    transaksi?: TransaksiListRelationFilter
  }, "plat">

  export type KendaraanOrderByWithAggregationInput = {
    plat?: SortOrder
    merk?: SortOrder
    warna?: SortOrder
    tahun?: SortOrder
    bahan_bakar?: SortOrder
    cc?: SortOrder
    harga_sewa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jenisKendaraan?: SortOrder
    _count?: KendaraanCountOrderByAggregateInput
    _avg?: KendaraanAvgOrderByAggregateInput
    _max?: KendaraanMaxOrderByAggregateInput
    _min?: KendaraanMinOrderByAggregateInput
    _sum?: KendaraanSumOrderByAggregateInput
  }

  export type KendaraanScalarWhereWithAggregatesInput = {
    AND?: KendaraanScalarWhereWithAggregatesInput | KendaraanScalarWhereWithAggregatesInput[]
    OR?: KendaraanScalarWhereWithAggregatesInput[]
    NOT?: KendaraanScalarWhereWithAggregatesInput | KendaraanScalarWhereWithAggregatesInput[]
    plat?: StringWithAggregatesFilter<"Kendaraan"> | string
    merk?: StringWithAggregatesFilter<"Kendaraan"> | string
    warna?: StringWithAggregatesFilter<"Kendaraan"> | string
    tahun?: StringWithAggregatesFilter<"Kendaraan"> | string
    bahan_bakar?: StringWithAggregatesFilter<"Kendaraan"> | string
    cc?: IntWithAggregatesFilter<"Kendaraan"> | number
    harga_sewa?: DecimalWithAggregatesFilter<"Kendaraan"> | Decimal | DecimalJsLike | number | string
    status?: BoolWithAggregatesFilter<"Kendaraan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Kendaraan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kendaraan"> | Date | string
    jenisKendaraan?: StringWithAggregatesFilter<"Kendaraan"> | string
  }

  export type TransaksiWhereInput = {
    AND?: TransaksiWhereInput | TransaksiWhereInput[]
    OR?: TransaksiWhereInput[]
    NOT?: TransaksiWhereInput | TransaksiWhereInput[]
    transaksiId?: StringFilter<"Transaksi"> | string
    kendaraan_plat?: StringFilter<"Transaksi"> | string
    customer_id?: StringFilter<"Transaksi"> | string
    tgl_mulai_sewa?: DateTimeFilter<"Transaksi"> | Date | string
    tgl_selesai_sewa?: DateTimeFilter<"Transaksi"> | Date | string
    total_harga?: DecimalFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFilter<"Transaksi"> | string
    url_foto?: StringNullableFilter<"Transaksi"> | string | null
    createdAt?: DateTimeFilter<"Transaksi"> | Date | string
    updatedAt?: DateTimeFilter<"Transaksi"> | Date | string
    kendaraan?: XOR<KendaraanRelationFilter, KendaraanWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type TransaksiOrderByWithRelationInput = {
    transaksiId?: SortOrder
    kendaraan_plat?: SortOrder
    customer_id?: SortOrder
    tgl_mulai_sewa?: SortOrder
    tgl_selesai_sewa?: SortOrder
    total_harga?: SortOrder
    deskripsi?: SortOrder
    url_foto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kendaraan?: KendaraanOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type TransaksiWhereUniqueInput = Prisma.AtLeast<{
    transaksiId?: string
    AND?: TransaksiWhereInput | TransaksiWhereInput[]
    OR?: TransaksiWhereInput[]
    NOT?: TransaksiWhereInput | TransaksiWhereInput[]
    kendaraan_plat?: StringFilter<"Transaksi"> | string
    customer_id?: StringFilter<"Transaksi"> | string
    tgl_mulai_sewa?: DateTimeFilter<"Transaksi"> | Date | string
    tgl_selesai_sewa?: DateTimeFilter<"Transaksi"> | Date | string
    total_harga?: DecimalFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFilter<"Transaksi"> | string
    url_foto?: StringNullableFilter<"Transaksi"> | string | null
    createdAt?: DateTimeFilter<"Transaksi"> | Date | string
    updatedAt?: DateTimeFilter<"Transaksi"> | Date | string
    kendaraan?: XOR<KendaraanRelationFilter, KendaraanWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }, "transaksiId">

  export type TransaksiOrderByWithAggregationInput = {
    transaksiId?: SortOrder
    kendaraan_plat?: SortOrder
    customer_id?: SortOrder
    tgl_mulai_sewa?: SortOrder
    tgl_selesai_sewa?: SortOrder
    total_harga?: SortOrder
    deskripsi?: SortOrder
    url_foto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransaksiCountOrderByAggregateInput
    _avg?: TransaksiAvgOrderByAggregateInput
    _max?: TransaksiMaxOrderByAggregateInput
    _min?: TransaksiMinOrderByAggregateInput
    _sum?: TransaksiSumOrderByAggregateInput
  }

  export type TransaksiScalarWhereWithAggregatesInput = {
    AND?: TransaksiScalarWhereWithAggregatesInput | TransaksiScalarWhereWithAggregatesInput[]
    OR?: TransaksiScalarWhereWithAggregatesInput[]
    NOT?: TransaksiScalarWhereWithAggregatesInput | TransaksiScalarWhereWithAggregatesInput[]
    transaksiId?: StringWithAggregatesFilter<"Transaksi"> | string
    kendaraan_plat?: StringWithAggregatesFilter<"Transaksi"> | string
    customer_id?: StringWithAggregatesFilter<"Transaksi"> | string
    tgl_mulai_sewa?: DateTimeWithAggregatesFilter<"Transaksi"> | Date | string
    tgl_selesai_sewa?: DateTimeWithAggregatesFilter<"Transaksi"> | Date | string
    total_harga?: DecimalWithAggregatesFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string
    deskripsi?: StringWithAggregatesFilter<"Transaksi"> | string
    url_foto?: StringNullableWithAggregatesFilter<"Transaksi"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaksi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaksi"> | Date | string
  }

  export type FotoWhereInput = {
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    image_id?: StringFilter<"Foto"> | string
    title?: StringFilter<"Foto"> | string
    image?: StringFilter<"Foto"> | string
    kendaraan_plat?: StringFilter<"Foto"> | string
    kendaraan?: XOR<KendaraanRelationFilter, KendaraanWhereInput>
  }

  export type FotoOrderByWithRelationInput = {
    image_id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    kendaraan_plat?: SortOrder
    kendaraan?: KendaraanOrderByWithRelationInput
  }

  export type FotoWhereUniqueInput = Prisma.AtLeast<{
    image_id?: string
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    title?: StringFilter<"Foto"> | string
    image?: StringFilter<"Foto"> | string
    kendaraan_plat?: StringFilter<"Foto"> | string
    kendaraan?: XOR<KendaraanRelationFilter, KendaraanWhereInput>
  }, "image_id">

  export type FotoOrderByWithAggregationInput = {
    image_id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    kendaraan_plat?: SortOrder
    _count?: FotoCountOrderByAggregateInput
    _max?: FotoMaxOrderByAggregateInput
    _min?: FotoMinOrderByAggregateInput
  }

  export type FotoScalarWhereWithAggregatesInput = {
    AND?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    OR?: FotoScalarWhereWithAggregatesInput[]
    NOT?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    image_id?: StringWithAggregatesFilter<"Foto"> | string
    title?: StringWithAggregatesFilter<"Foto"> | string
    image?: StringWithAggregatesFilter<"Foto"> | string
    kendaraan_plat?: StringWithAggregatesFilter<"Foto"> | string
  }

  export type JenisWhereInput = {
    AND?: JenisWhereInput | JenisWhereInput[]
    OR?: JenisWhereInput[]
    NOT?: JenisWhereInput | JenisWhereInput[]
    id?: StringFilter<"Jenis"> | string
    jenis?: StringFilter<"Jenis"> | string
    created_at?: DateTimeFilter<"Jenis"> | Date | string
    kendaraan?: KendaraanListRelationFilter
  }

  export type JenisOrderByWithRelationInput = {
    id?: SortOrder
    jenis?: SortOrder
    created_at?: SortOrder
    kendaraan?: KendaraanOrderByRelationAggregateInput
  }

  export type JenisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JenisWhereInput | JenisWhereInput[]
    OR?: JenisWhereInput[]
    NOT?: JenisWhereInput | JenisWhereInput[]
    jenis?: StringFilter<"Jenis"> | string
    created_at?: DateTimeFilter<"Jenis"> | Date | string
    kendaraan?: KendaraanListRelationFilter
  }, "id">

  export type JenisOrderByWithAggregationInput = {
    id?: SortOrder
    jenis?: SortOrder
    created_at?: SortOrder
    _count?: JenisCountOrderByAggregateInput
    _max?: JenisMaxOrderByAggregateInput
    _min?: JenisMinOrderByAggregateInput
  }

  export type JenisScalarWhereWithAggregatesInput = {
    AND?: JenisScalarWhereWithAggregatesInput | JenisScalarWhereWithAggregatesInput[]
    OR?: JenisScalarWhereWithAggregatesInput[]
    NOT?: JenisScalarWhereWithAggregatesInput | JenisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jenis"> | string
    jenis?: StringWithAggregatesFilter<"Jenis"> | string
    created_at?: DateTimeWithAggregatesFilter<"Jenis"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PegawaiWhereInput = {
    AND?: PegawaiWhereInput | PegawaiWhereInput[]
    OR?: PegawaiWhereInput[]
    NOT?: PegawaiWhereInput | PegawaiWhereInput[]
    id?: StringFilter<"Pegawai"> | string
    nama?: StringFilter<"Pegawai"> | string
    umur?: IntFilter<"Pegawai"> | number
    alamat?: StringFilter<"Pegawai"> | string
    no_hp?: StringFilter<"Pegawai"> | string
    gaji?: StringFilter<"Pegawai"> | string
  }

  export type PegawaiOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    umur?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    gaji?: SortOrder
  }

  export type PegawaiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PegawaiWhereInput | PegawaiWhereInput[]
    OR?: PegawaiWhereInput[]
    NOT?: PegawaiWhereInput | PegawaiWhereInput[]
    nama?: StringFilter<"Pegawai"> | string
    umur?: IntFilter<"Pegawai"> | number
    alamat?: StringFilter<"Pegawai"> | string
    no_hp?: StringFilter<"Pegawai"> | string
    gaji?: StringFilter<"Pegawai"> | string
  }, "id">

  export type PegawaiOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    umur?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    gaji?: SortOrder
    _count?: PegawaiCountOrderByAggregateInput
    _avg?: PegawaiAvgOrderByAggregateInput
    _max?: PegawaiMaxOrderByAggregateInput
    _min?: PegawaiMinOrderByAggregateInput
    _sum?: PegawaiSumOrderByAggregateInput
  }

  export type PegawaiScalarWhereWithAggregatesInput = {
    AND?: PegawaiScalarWhereWithAggregatesInput | PegawaiScalarWhereWithAggregatesInput[]
    OR?: PegawaiScalarWhereWithAggregatesInput[]
    NOT?: PegawaiScalarWhereWithAggregatesInput | PegawaiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pegawai"> | string
    nama?: StringWithAggregatesFilter<"Pegawai"> | string
    umur?: IntWithAggregatesFilter<"Pegawai"> | number
    alamat?: StringWithAggregatesFilter<"Pegawai"> | string
    no_hp?: StringWithAggregatesFilter<"Pegawai"> | string
    gaji?: StringWithAggregatesFilter<"Pegawai"> | string
  }

  export type ContactCreateInput = {
    id?: string
    name: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: string
    name: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    alamat: string
    hp: string
    nik: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transaksi?: TransaksiCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    alamat: string
    hp: string
    nik: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transaksi?: TransaksiUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    hp?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TransaksiUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    hp?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksi?: TransaksiUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    alamat: string
    hp: string
    nik: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    hp?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    hp?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KendaraanCreateInput = {
    plat: string
    merk: string
    warna: string
    tahun: string
    bahan_bakar: string
    cc: number
    harga_sewa: Decimal | DecimalJsLike | number | string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jenis: JenisCreateNestedOneWithoutKendaraanInput
    foto?: FotoCreateNestedManyWithoutKendaraanInput
    transaksi?: TransaksiCreateNestedManyWithoutKendaraanInput
  }

  export type KendaraanUncheckedCreateInput = {
    plat: string
    merk: string
    warna: string
    tahun: string
    bahan_bakar: string
    cc: number
    harga_sewa: Decimal | DecimalJsLike | number | string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jenisKendaraan: string
    foto?: FotoUncheckedCreateNestedManyWithoutKendaraanInput
    transaksi?: TransaksiUncheckedCreateNestedManyWithoutKendaraanInput
  }

  export type KendaraanUpdateInput = {
    plat?: StringFieldUpdateOperationsInput | string
    merk?: StringFieldUpdateOperationsInput | string
    warna?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    bahan_bakar?: StringFieldUpdateOperationsInput | string
    cc?: IntFieldUpdateOperationsInput | number
    harga_sewa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis?: JenisUpdateOneRequiredWithoutKendaraanNestedInput
    foto?: FotoUpdateManyWithoutKendaraanNestedInput
    transaksi?: TransaksiUpdateManyWithoutKendaraanNestedInput
  }

  export type KendaraanUncheckedUpdateInput = {
    plat?: StringFieldUpdateOperationsInput | string
    merk?: StringFieldUpdateOperationsInput | string
    warna?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    bahan_bakar?: StringFieldUpdateOperationsInput | string
    cc?: IntFieldUpdateOperationsInput | number
    harga_sewa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKendaraan?: StringFieldUpdateOperationsInput | string
    foto?: FotoUncheckedUpdateManyWithoutKendaraanNestedInput
    transaksi?: TransaksiUncheckedUpdateManyWithoutKendaraanNestedInput
  }

  export type KendaraanCreateManyInput = {
    plat: string
    merk: string
    warna: string
    tahun: string
    bahan_bakar: string
    cc: number
    harga_sewa: Decimal | DecimalJsLike | number | string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jenisKendaraan: string
  }

  export type KendaraanUpdateManyMutationInput = {
    plat?: StringFieldUpdateOperationsInput | string
    merk?: StringFieldUpdateOperationsInput | string
    warna?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    bahan_bakar?: StringFieldUpdateOperationsInput | string
    cc?: IntFieldUpdateOperationsInput | number
    harga_sewa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KendaraanUncheckedUpdateManyInput = {
    plat?: StringFieldUpdateOperationsInput | string
    merk?: StringFieldUpdateOperationsInput | string
    warna?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    bahan_bakar?: StringFieldUpdateOperationsInput | string
    cc?: IntFieldUpdateOperationsInput | number
    harga_sewa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKendaraan?: StringFieldUpdateOperationsInput | string
  }

  export type TransaksiCreateInput = {
    transaksiId?: string
    tgl_mulai_sewa: Date | string
    tgl_selesai_sewa: Date | string
    total_harga?: Decimal | DecimalJsLike | number | string
    deskripsi: string
    url_foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kendaraan: KendaraanCreateNestedOneWithoutTransaksiInput
    customer: CustomerCreateNestedOneWithoutTransaksiInput
  }

  export type TransaksiUncheckedCreateInput = {
    transaksiId?: string
    kendaraan_plat: string
    customer_id: string
    tgl_mulai_sewa: Date | string
    tgl_selesai_sewa: Date | string
    total_harga?: Decimal | DecimalJsLike | number | string
    deskripsi: string
    url_foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiUpdateInput = {
    transaksiId?: StringFieldUpdateOperationsInput | string
    tgl_mulai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_selesai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    url_foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kendaraan?: KendaraanUpdateOneRequiredWithoutTransaksiNestedInput
    customer?: CustomerUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateInput = {
    transaksiId?: StringFieldUpdateOperationsInput | string
    kendaraan_plat?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    tgl_mulai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_selesai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    url_foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiCreateManyInput = {
    transaksiId?: string
    kendaraan_plat: string
    customer_id: string
    tgl_mulai_sewa: Date | string
    tgl_selesai_sewa: Date | string
    total_harga?: Decimal | DecimalJsLike | number | string
    deskripsi: string
    url_foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiUpdateManyMutationInput = {
    transaksiId?: StringFieldUpdateOperationsInput | string
    tgl_mulai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_selesai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    url_foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiUncheckedUpdateManyInput = {
    transaksiId?: StringFieldUpdateOperationsInput | string
    kendaraan_plat?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    tgl_mulai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_selesai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    url_foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoCreateInput = {
    image_id?: string
    title: string
    image: string
    kendaraan?: KendaraanCreateNestedOneWithoutFotoInput
  }

  export type FotoUncheckedCreateInput = {
    image_id?: string
    title: string
    image: string
    kendaraan_plat?: string
  }

  export type FotoUpdateInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    kendaraan?: KendaraanUpdateOneRequiredWithoutFotoNestedInput
  }

  export type FotoUncheckedUpdateInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    kendaraan_plat?: StringFieldUpdateOperationsInput | string
  }

  export type FotoCreateManyInput = {
    image_id?: string
    title: string
    image: string
    kendaraan_plat?: string
  }

  export type FotoUpdateManyMutationInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type FotoUncheckedUpdateManyInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    kendaraan_plat?: StringFieldUpdateOperationsInput | string
  }

  export type JenisCreateInput = {
    id?: string
    jenis: string
    created_at?: Date | string
    kendaraan?: KendaraanCreateNestedManyWithoutJenisInput
  }

  export type JenisUncheckedCreateInput = {
    id?: string
    jenis: string
    created_at?: Date | string
    kendaraan?: KendaraanUncheckedCreateNestedManyWithoutJenisInput
  }

  export type JenisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kendaraan?: KendaraanUpdateManyWithoutJenisNestedInput
  }

  export type JenisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    kendaraan?: KendaraanUncheckedUpdateManyWithoutJenisNestedInput
  }

  export type JenisCreateManyInput = {
    id?: string
    jenis: string
    created_at?: Date | string
  }

  export type JenisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JenisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PegawaiCreateInput = {
    id?: string
    nama: string
    umur: number
    alamat: string
    no_hp: string
    gaji: string
  }

  export type PegawaiUncheckedCreateInput = {
    id?: string
    nama: string
    umur: number
    alamat: string
    no_hp: string
    gaji: string
  }

  export type PegawaiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    gaji?: StringFieldUpdateOperationsInput | string
  }

  export type PegawaiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    gaji?: StringFieldUpdateOperationsInput | string
  }

  export type PegawaiCreateManyInput = {
    id?: string
    nama: string
    umur: number
    alamat: string
    no_hp: string
    gaji: string
  }

  export type PegawaiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    gaji?: StringFieldUpdateOperationsInput | string
  }

  export type PegawaiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    umur?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    gaji?: StringFieldUpdateOperationsInput | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TransaksiListRelationFilter = {
    every?: TransaksiWhereInput
    some?: TransaksiWhereInput
    none?: TransaksiWhereInput
  }

  export type TransaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alamat?: SortOrder
    hp?: SortOrder
    nik?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alamat?: SortOrder
    hp?: SortOrder
    nik?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alamat?: SortOrder
    hp?: SortOrder
    nik?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type JenisRelationFilter = {
    is?: JenisWhereInput
    isNot?: JenisWhereInput
  }

  export type FotoListRelationFilter = {
    every?: FotoWhereInput
    some?: FotoWhereInput
    none?: FotoWhereInput
  }

  export type FotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KendaraanCountOrderByAggregateInput = {
    plat?: SortOrder
    merk?: SortOrder
    warna?: SortOrder
    tahun?: SortOrder
    bahan_bakar?: SortOrder
    cc?: SortOrder
    harga_sewa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jenisKendaraan?: SortOrder
  }

  export type KendaraanAvgOrderByAggregateInput = {
    cc?: SortOrder
    harga_sewa?: SortOrder
  }

  export type KendaraanMaxOrderByAggregateInput = {
    plat?: SortOrder
    merk?: SortOrder
    warna?: SortOrder
    tahun?: SortOrder
    bahan_bakar?: SortOrder
    cc?: SortOrder
    harga_sewa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jenisKendaraan?: SortOrder
  }

  export type KendaraanMinOrderByAggregateInput = {
    plat?: SortOrder
    merk?: SortOrder
    warna?: SortOrder
    tahun?: SortOrder
    bahan_bakar?: SortOrder
    cc?: SortOrder
    harga_sewa?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jenisKendaraan?: SortOrder
  }

  export type KendaraanSumOrderByAggregateInput = {
    cc?: SortOrder
    harga_sewa?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type KendaraanRelationFilter = {
    is?: KendaraanWhereInput
    isNot?: KendaraanWhereInput
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransaksiCountOrderByAggregateInput = {
    transaksiId?: SortOrder
    kendaraan_plat?: SortOrder
    customer_id?: SortOrder
    tgl_mulai_sewa?: SortOrder
    tgl_selesai_sewa?: SortOrder
    total_harga?: SortOrder
    deskripsi?: SortOrder
    url_foto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransaksiAvgOrderByAggregateInput = {
    total_harga?: SortOrder
  }

  export type TransaksiMaxOrderByAggregateInput = {
    transaksiId?: SortOrder
    kendaraan_plat?: SortOrder
    customer_id?: SortOrder
    tgl_mulai_sewa?: SortOrder
    tgl_selesai_sewa?: SortOrder
    total_harga?: SortOrder
    deskripsi?: SortOrder
    url_foto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransaksiMinOrderByAggregateInput = {
    transaksiId?: SortOrder
    kendaraan_plat?: SortOrder
    customer_id?: SortOrder
    tgl_mulai_sewa?: SortOrder
    tgl_selesai_sewa?: SortOrder
    total_harga?: SortOrder
    deskripsi?: SortOrder
    url_foto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransaksiSumOrderByAggregateInput = {
    total_harga?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FotoCountOrderByAggregateInput = {
    image_id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    kendaraan_plat?: SortOrder
  }

  export type FotoMaxOrderByAggregateInput = {
    image_id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    kendaraan_plat?: SortOrder
  }

  export type FotoMinOrderByAggregateInput = {
    image_id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    kendaraan_plat?: SortOrder
  }

  export type KendaraanListRelationFilter = {
    every?: KendaraanWhereInput
    some?: KendaraanWhereInput
    none?: KendaraanWhereInput
  }

  export type KendaraanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JenisCountOrderByAggregateInput = {
    id?: SortOrder
    jenis?: SortOrder
    created_at?: SortOrder
  }

  export type JenisMaxOrderByAggregateInput = {
    id?: SortOrder
    jenis?: SortOrder
    created_at?: SortOrder
  }

  export type JenisMinOrderByAggregateInput = {
    id?: SortOrder
    jenis?: SortOrder
    created_at?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PegawaiCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    umur?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    gaji?: SortOrder
  }

  export type PegawaiAvgOrderByAggregateInput = {
    umur?: SortOrder
  }

  export type PegawaiMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    umur?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    gaji?: SortOrder
  }

  export type PegawaiMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    umur?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    gaji?: SortOrder
  }

  export type PegawaiSumOrderByAggregateInput = {
    umur?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransaksiCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TransaksiCreateWithoutCustomerInput, TransaksiUncheckedCreateWithoutCustomerInput> | TransaksiCreateWithoutCustomerInput[] | TransaksiUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutCustomerInput | TransaksiCreateOrConnectWithoutCustomerInput[]
    createMany?: TransaksiCreateManyCustomerInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type TransaksiUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TransaksiCreateWithoutCustomerInput, TransaksiUncheckedCreateWithoutCustomerInput> | TransaksiCreateWithoutCustomerInput[] | TransaksiUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutCustomerInput | TransaksiCreateOrConnectWithoutCustomerInput[]
    createMany?: TransaksiCreateManyCustomerInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type TransaksiUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TransaksiCreateWithoutCustomerInput, TransaksiUncheckedCreateWithoutCustomerInput> | TransaksiCreateWithoutCustomerInput[] | TransaksiUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutCustomerInput | TransaksiCreateOrConnectWithoutCustomerInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutCustomerInput | TransaksiUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TransaksiCreateManyCustomerInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutCustomerInput | TransaksiUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutCustomerInput | TransaksiUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type TransaksiUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TransaksiCreateWithoutCustomerInput, TransaksiUncheckedCreateWithoutCustomerInput> | TransaksiCreateWithoutCustomerInput[] | TransaksiUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutCustomerInput | TransaksiCreateOrConnectWithoutCustomerInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutCustomerInput | TransaksiUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TransaksiCreateManyCustomerInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutCustomerInput | TransaksiUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutCustomerInput | TransaksiUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type JenisCreateNestedOneWithoutKendaraanInput = {
    create?: XOR<JenisCreateWithoutKendaraanInput, JenisUncheckedCreateWithoutKendaraanInput>
    connectOrCreate?: JenisCreateOrConnectWithoutKendaraanInput
    connect?: JenisWhereUniqueInput
  }

  export type FotoCreateNestedManyWithoutKendaraanInput = {
    create?: XOR<FotoCreateWithoutKendaraanInput, FotoUncheckedCreateWithoutKendaraanInput> | FotoCreateWithoutKendaraanInput[] | FotoUncheckedCreateWithoutKendaraanInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutKendaraanInput | FotoCreateOrConnectWithoutKendaraanInput[]
    createMany?: FotoCreateManyKendaraanInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type TransaksiCreateNestedManyWithoutKendaraanInput = {
    create?: XOR<TransaksiCreateWithoutKendaraanInput, TransaksiUncheckedCreateWithoutKendaraanInput> | TransaksiCreateWithoutKendaraanInput[] | TransaksiUncheckedCreateWithoutKendaraanInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutKendaraanInput | TransaksiCreateOrConnectWithoutKendaraanInput[]
    createMany?: TransaksiCreateManyKendaraanInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type FotoUncheckedCreateNestedManyWithoutKendaraanInput = {
    create?: XOR<FotoCreateWithoutKendaraanInput, FotoUncheckedCreateWithoutKendaraanInput> | FotoCreateWithoutKendaraanInput[] | FotoUncheckedCreateWithoutKendaraanInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutKendaraanInput | FotoCreateOrConnectWithoutKendaraanInput[]
    createMany?: FotoCreateManyKendaraanInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type TransaksiUncheckedCreateNestedManyWithoutKendaraanInput = {
    create?: XOR<TransaksiCreateWithoutKendaraanInput, TransaksiUncheckedCreateWithoutKendaraanInput> | TransaksiCreateWithoutKendaraanInput[] | TransaksiUncheckedCreateWithoutKendaraanInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutKendaraanInput | TransaksiCreateOrConnectWithoutKendaraanInput[]
    createMany?: TransaksiCreateManyKendaraanInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type JenisUpdateOneRequiredWithoutKendaraanNestedInput = {
    create?: XOR<JenisCreateWithoutKendaraanInput, JenisUncheckedCreateWithoutKendaraanInput>
    connectOrCreate?: JenisCreateOrConnectWithoutKendaraanInput
    upsert?: JenisUpsertWithoutKendaraanInput
    connect?: JenisWhereUniqueInput
    update?: XOR<XOR<JenisUpdateToOneWithWhereWithoutKendaraanInput, JenisUpdateWithoutKendaraanInput>, JenisUncheckedUpdateWithoutKendaraanInput>
  }

  export type FotoUpdateManyWithoutKendaraanNestedInput = {
    create?: XOR<FotoCreateWithoutKendaraanInput, FotoUncheckedCreateWithoutKendaraanInput> | FotoCreateWithoutKendaraanInput[] | FotoUncheckedCreateWithoutKendaraanInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutKendaraanInput | FotoCreateOrConnectWithoutKendaraanInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutKendaraanInput | FotoUpsertWithWhereUniqueWithoutKendaraanInput[]
    createMany?: FotoCreateManyKendaraanInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutKendaraanInput | FotoUpdateWithWhereUniqueWithoutKendaraanInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutKendaraanInput | FotoUpdateManyWithWhereWithoutKendaraanInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type TransaksiUpdateManyWithoutKendaraanNestedInput = {
    create?: XOR<TransaksiCreateWithoutKendaraanInput, TransaksiUncheckedCreateWithoutKendaraanInput> | TransaksiCreateWithoutKendaraanInput[] | TransaksiUncheckedCreateWithoutKendaraanInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutKendaraanInput | TransaksiCreateOrConnectWithoutKendaraanInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutKendaraanInput | TransaksiUpsertWithWhereUniqueWithoutKendaraanInput[]
    createMany?: TransaksiCreateManyKendaraanInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutKendaraanInput | TransaksiUpdateWithWhereUniqueWithoutKendaraanInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutKendaraanInput | TransaksiUpdateManyWithWhereWithoutKendaraanInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type FotoUncheckedUpdateManyWithoutKendaraanNestedInput = {
    create?: XOR<FotoCreateWithoutKendaraanInput, FotoUncheckedCreateWithoutKendaraanInput> | FotoCreateWithoutKendaraanInput[] | FotoUncheckedCreateWithoutKendaraanInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutKendaraanInput | FotoCreateOrConnectWithoutKendaraanInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutKendaraanInput | FotoUpsertWithWhereUniqueWithoutKendaraanInput[]
    createMany?: FotoCreateManyKendaraanInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutKendaraanInput | FotoUpdateWithWhereUniqueWithoutKendaraanInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutKendaraanInput | FotoUpdateManyWithWhereWithoutKendaraanInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type TransaksiUncheckedUpdateManyWithoutKendaraanNestedInput = {
    create?: XOR<TransaksiCreateWithoutKendaraanInput, TransaksiUncheckedCreateWithoutKendaraanInput> | TransaksiCreateWithoutKendaraanInput[] | TransaksiUncheckedCreateWithoutKendaraanInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutKendaraanInput | TransaksiCreateOrConnectWithoutKendaraanInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutKendaraanInput | TransaksiUpsertWithWhereUniqueWithoutKendaraanInput[]
    createMany?: TransaksiCreateManyKendaraanInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutKendaraanInput | TransaksiUpdateWithWhereUniqueWithoutKendaraanInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutKendaraanInput | TransaksiUpdateManyWithWhereWithoutKendaraanInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type KendaraanCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<KendaraanCreateWithoutTransaksiInput, KendaraanUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: KendaraanCreateOrConnectWithoutTransaksiInput
    connect?: KendaraanWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<CustomerCreateWithoutTransaksiInput, CustomerUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTransaksiInput
    connect?: CustomerWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type KendaraanUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<KendaraanCreateWithoutTransaksiInput, KendaraanUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: KendaraanCreateOrConnectWithoutTransaksiInput
    upsert?: KendaraanUpsertWithoutTransaksiInput
    connect?: KendaraanWhereUniqueInput
    update?: XOR<XOR<KendaraanUpdateToOneWithWhereWithoutTransaksiInput, KendaraanUpdateWithoutTransaksiInput>, KendaraanUncheckedUpdateWithoutTransaksiInput>
  }

  export type CustomerUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<CustomerCreateWithoutTransaksiInput, CustomerUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTransaksiInput
    upsert?: CustomerUpsertWithoutTransaksiInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTransaksiInput, CustomerUpdateWithoutTransaksiInput>, CustomerUncheckedUpdateWithoutTransaksiInput>
  }

  export type KendaraanCreateNestedOneWithoutFotoInput = {
    create?: XOR<KendaraanCreateWithoutFotoInput, KendaraanUncheckedCreateWithoutFotoInput>
    connectOrCreate?: KendaraanCreateOrConnectWithoutFotoInput
    connect?: KendaraanWhereUniqueInput
  }

  export type KendaraanUpdateOneRequiredWithoutFotoNestedInput = {
    create?: XOR<KendaraanCreateWithoutFotoInput, KendaraanUncheckedCreateWithoutFotoInput>
    connectOrCreate?: KendaraanCreateOrConnectWithoutFotoInput
    upsert?: KendaraanUpsertWithoutFotoInput
    connect?: KendaraanWhereUniqueInput
    update?: XOR<XOR<KendaraanUpdateToOneWithWhereWithoutFotoInput, KendaraanUpdateWithoutFotoInput>, KendaraanUncheckedUpdateWithoutFotoInput>
  }

  export type KendaraanCreateNestedManyWithoutJenisInput = {
    create?: XOR<KendaraanCreateWithoutJenisInput, KendaraanUncheckedCreateWithoutJenisInput> | KendaraanCreateWithoutJenisInput[] | KendaraanUncheckedCreateWithoutJenisInput[]
    connectOrCreate?: KendaraanCreateOrConnectWithoutJenisInput | KendaraanCreateOrConnectWithoutJenisInput[]
    createMany?: KendaraanCreateManyJenisInputEnvelope
    connect?: KendaraanWhereUniqueInput | KendaraanWhereUniqueInput[]
  }

  export type KendaraanUncheckedCreateNestedManyWithoutJenisInput = {
    create?: XOR<KendaraanCreateWithoutJenisInput, KendaraanUncheckedCreateWithoutJenisInput> | KendaraanCreateWithoutJenisInput[] | KendaraanUncheckedCreateWithoutJenisInput[]
    connectOrCreate?: KendaraanCreateOrConnectWithoutJenisInput | KendaraanCreateOrConnectWithoutJenisInput[]
    createMany?: KendaraanCreateManyJenisInputEnvelope
    connect?: KendaraanWhereUniqueInput | KendaraanWhereUniqueInput[]
  }

  export type KendaraanUpdateManyWithoutJenisNestedInput = {
    create?: XOR<KendaraanCreateWithoutJenisInput, KendaraanUncheckedCreateWithoutJenisInput> | KendaraanCreateWithoutJenisInput[] | KendaraanUncheckedCreateWithoutJenisInput[]
    connectOrCreate?: KendaraanCreateOrConnectWithoutJenisInput | KendaraanCreateOrConnectWithoutJenisInput[]
    upsert?: KendaraanUpsertWithWhereUniqueWithoutJenisInput | KendaraanUpsertWithWhereUniqueWithoutJenisInput[]
    createMany?: KendaraanCreateManyJenisInputEnvelope
    set?: KendaraanWhereUniqueInput | KendaraanWhereUniqueInput[]
    disconnect?: KendaraanWhereUniqueInput | KendaraanWhereUniqueInput[]
    delete?: KendaraanWhereUniqueInput | KendaraanWhereUniqueInput[]
    connect?: KendaraanWhereUniqueInput | KendaraanWhereUniqueInput[]
    update?: KendaraanUpdateWithWhereUniqueWithoutJenisInput | KendaraanUpdateWithWhereUniqueWithoutJenisInput[]
    updateMany?: KendaraanUpdateManyWithWhereWithoutJenisInput | KendaraanUpdateManyWithWhereWithoutJenisInput[]
    deleteMany?: KendaraanScalarWhereInput | KendaraanScalarWhereInput[]
  }

  export type KendaraanUncheckedUpdateManyWithoutJenisNestedInput = {
    create?: XOR<KendaraanCreateWithoutJenisInput, KendaraanUncheckedCreateWithoutJenisInput> | KendaraanCreateWithoutJenisInput[] | KendaraanUncheckedCreateWithoutJenisInput[]
    connectOrCreate?: KendaraanCreateOrConnectWithoutJenisInput | KendaraanCreateOrConnectWithoutJenisInput[]
    upsert?: KendaraanUpsertWithWhereUniqueWithoutJenisInput | KendaraanUpsertWithWhereUniqueWithoutJenisInput[]
    createMany?: KendaraanCreateManyJenisInputEnvelope
    set?: KendaraanWhereUniqueInput | KendaraanWhereUniqueInput[]
    disconnect?: KendaraanWhereUniqueInput | KendaraanWhereUniqueInput[]
    delete?: KendaraanWhereUniqueInput | KendaraanWhereUniqueInput[]
    connect?: KendaraanWhereUniqueInput | KendaraanWhereUniqueInput[]
    update?: KendaraanUpdateWithWhereUniqueWithoutJenisInput | KendaraanUpdateWithWhereUniqueWithoutJenisInput[]
    updateMany?: KendaraanUpdateManyWithWhereWithoutJenisInput | KendaraanUpdateManyWithWhereWithoutJenisInput[]
    deleteMany?: KendaraanScalarWhereInput | KendaraanScalarWhereInput[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TransaksiCreateWithoutCustomerInput = {
    transaksiId?: string
    tgl_mulai_sewa: Date | string
    tgl_selesai_sewa: Date | string
    total_harga?: Decimal | DecimalJsLike | number | string
    deskripsi: string
    url_foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kendaraan: KendaraanCreateNestedOneWithoutTransaksiInput
  }

  export type TransaksiUncheckedCreateWithoutCustomerInput = {
    transaksiId?: string
    kendaraan_plat: string
    tgl_mulai_sewa: Date | string
    tgl_selesai_sewa: Date | string
    total_harga?: Decimal | DecimalJsLike | number | string
    deskripsi: string
    url_foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiCreateOrConnectWithoutCustomerInput = {
    where: TransaksiWhereUniqueInput
    create: XOR<TransaksiCreateWithoutCustomerInput, TransaksiUncheckedCreateWithoutCustomerInput>
  }

  export type TransaksiCreateManyCustomerInputEnvelope = {
    data: TransaksiCreateManyCustomerInput | TransaksiCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TransaksiUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TransaksiWhereUniqueInput
    update: XOR<TransaksiUpdateWithoutCustomerInput, TransaksiUncheckedUpdateWithoutCustomerInput>
    create: XOR<TransaksiCreateWithoutCustomerInput, TransaksiUncheckedCreateWithoutCustomerInput>
  }

  export type TransaksiUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TransaksiWhereUniqueInput
    data: XOR<TransaksiUpdateWithoutCustomerInput, TransaksiUncheckedUpdateWithoutCustomerInput>
  }

  export type TransaksiUpdateManyWithWhereWithoutCustomerInput = {
    where: TransaksiScalarWhereInput
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyWithoutCustomerInput>
  }

  export type TransaksiScalarWhereInput = {
    AND?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
    OR?: TransaksiScalarWhereInput[]
    NOT?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
    transaksiId?: StringFilter<"Transaksi"> | string
    kendaraan_plat?: StringFilter<"Transaksi"> | string
    customer_id?: StringFilter<"Transaksi"> | string
    tgl_mulai_sewa?: DateTimeFilter<"Transaksi"> | Date | string
    tgl_selesai_sewa?: DateTimeFilter<"Transaksi"> | Date | string
    total_harga?: DecimalFilter<"Transaksi"> | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFilter<"Transaksi"> | string
    url_foto?: StringNullableFilter<"Transaksi"> | string | null
    createdAt?: DateTimeFilter<"Transaksi"> | Date | string
    updatedAt?: DateTimeFilter<"Transaksi"> | Date | string
  }

  export type JenisCreateWithoutKendaraanInput = {
    id?: string
    jenis: string
    created_at?: Date | string
  }

  export type JenisUncheckedCreateWithoutKendaraanInput = {
    id?: string
    jenis: string
    created_at?: Date | string
  }

  export type JenisCreateOrConnectWithoutKendaraanInput = {
    where: JenisWhereUniqueInput
    create: XOR<JenisCreateWithoutKendaraanInput, JenisUncheckedCreateWithoutKendaraanInput>
  }

  export type FotoCreateWithoutKendaraanInput = {
    image_id?: string
    title: string
    image: string
  }

  export type FotoUncheckedCreateWithoutKendaraanInput = {
    image_id?: string
    title: string
    image: string
  }

  export type FotoCreateOrConnectWithoutKendaraanInput = {
    where: FotoWhereUniqueInput
    create: XOR<FotoCreateWithoutKendaraanInput, FotoUncheckedCreateWithoutKendaraanInput>
  }

  export type FotoCreateManyKendaraanInputEnvelope = {
    data: FotoCreateManyKendaraanInput | FotoCreateManyKendaraanInput[]
    skipDuplicates?: boolean
  }

  export type TransaksiCreateWithoutKendaraanInput = {
    transaksiId?: string
    tgl_mulai_sewa: Date | string
    tgl_selesai_sewa: Date | string
    total_harga?: Decimal | DecimalJsLike | number | string
    deskripsi: string
    url_foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutTransaksiInput
  }

  export type TransaksiUncheckedCreateWithoutKendaraanInput = {
    transaksiId?: string
    customer_id: string
    tgl_mulai_sewa: Date | string
    tgl_selesai_sewa: Date | string
    total_harga?: Decimal | DecimalJsLike | number | string
    deskripsi: string
    url_foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiCreateOrConnectWithoutKendaraanInput = {
    where: TransaksiWhereUniqueInput
    create: XOR<TransaksiCreateWithoutKendaraanInput, TransaksiUncheckedCreateWithoutKendaraanInput>
  }

  export type TransaksiCreateManyKendaraanInputEnvelope = {
    data: TransaksiCreateManyKendaraanInput | TransaksiCreateManyKendaraanInput[]
    skipDuplicates?: boolean
  }

  export type JenisUpsertWithoutKendaraanInput = {
    update: XOR<JenisUpdateWithoutKendaraanInput, JenisUncheckedUpdateWithoutKendaraanInput>
    create: XOR<JenisCreateWithoutKendaraanInput, JenisUncheckedCreateWithoutKendaraanInput>
    where?: JenisWhereInput
  }

  export type JenisUpdateToOneWithWhereWithoutKendaraanInput = {
    where?: JenisWhereInput
    data: XOR<JenisUpdateWithoutKendaraanInput, JenisUncheckedUpdateWithoutKendaraanInput>
  }

  export type JenisUpdateWithoutKendaraanInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JenisUncheckedUpdateWithoutKendaraanInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoUpsertWithWhereUniqueWithoutKendaraanInput = {
    where: FotoWhereUniqueInput
    update: XOR<FotoUpdateWithoutKendaraanInput, FotoUncheckedUpdateWithoutKendaraanInput>
    create: XOR<FotoCreateWithoutKendaraanInput, FotoUncheckedCreateWithoutKendaraanInput>
  }

  export type FotoUpdateWithWhereUniqueWithoutKendaraanInput = {
    where: FotoWhereUniqueInput
    data: XOR<FotoUpdateWithoutKendaraanInput, FotoUncheckedUpdateWithoutKendaraanInput>
  }

  export type FotoUpdateManyWithWhereWithoutKendaraanInput = {
    where: FotoScalarWhereInput
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyWithoutKendaraanInput>
  }

  export type FotoScalarWhereInput = {
    AND?: FotoScalarWhereInput | FotoScalarWhereInput[]
    OR?: FotoScalarWhereInput[]
    NOT?: FotoScalarWhereInput | FotoScalarWhereInput[]
    image_id?: StringFilter<"Foto"> | string
    title?: StringFilter<"Foto"> | string
    image?: StringFilter<"Foto"> | string
    kendaraan_plat?: StringFilter<"Foto"> | string
  }

  export type TransaksiUpsertWithWhereUniqueWithoutKendaraanInput = {
    where: TransaksiWhereUniqueInput
    update: XOR<TransaksiUpdateWithoutKendaraanInput, TransaksiUncheckedUpdateWithoutKendaraanInput>
    create: XOR<TransaksiCreateWithoutKendaraanInput, TransaksiUncheckedCreateWithoutKendaraanInput>
  }

  export type TransaksiUpdateWithWhereUniqueWithoutKendaraanInput = {
    where: TransaksiWhereUniqueInput
    data: XOR<TransaksiUpdateWithoutKendaraanInput, TransaksiUncheckedUpdateWithoutKendaraanInput>
  }

  export type TransaksiUpdateManyWithWhereWithoutKendaraanInput = {
    where: TransaksiScalarWhereInput
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyWithoutKendaraanInput>
  }

  export type KendaraanCreateWithoutTransaksiInput = {
    plat: string
    merk: string
    warna: string
    tahun: string
    bahan_bakar: string
    cc: number
    harga_sewa: Decimal | DecimalJsLike | number | string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jenis: JenisCreateNestedOneWithoutKendaraanInput
    foto?: FotoCreateNestedManyWithoutKendaraanInput
  }

  export type KendaraanUncheckedCreateWithoutTransaksiInput = {
    plat: string
    merk: string
    warna: string
    tahun: string
    bahan_bakar: string
    cc: number
    harga_sewa: Decimal | DecimalJsLike | number | string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jenisKendaraan: string
    foto?: FotoUncheckedCreateNestedManyWithoutKendaraanInput
  }

  export type KendaraanCreateOrConnectWithoutTransaksiInput = {
    where: KendaraanWhereUniqueInput
    create: XOR<KendaraanCreateWithoutTransaksiInput, KendaraanUncheckedCreateWithoutTransaksiInput>
  }

  export type CustomerCreateWithoutTransaksiInput = {
    id?: string
    name: string
    alamat: string
    hp: string
    nik: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutTransaksiInput = {
    id?: string
    name: string
    alamat: string
    hp: string
    nik: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutTransaksiInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTransaksiInput, CustomerUncheckedCreateWithoutTransaksiInput>
  }

  export type KendaraanUpsertWithoutTransaksiInput = {
    update: XOR<KendaraanUpdateWithoutTransaksiInput, KendaraanUncheckedUpdateWithoutTransaksiInput>
    create: XOR<KendaraanCreateWithoutTransaksiInput, KendaraanUncheckedCreateWithoutTransaksiInput>
    where?: KendaraanWhereInput
  }

  export type KendaraanUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: KendaraanWhereInput
    data: XOR<KendaraanUpdateWithoutTransaksiInput, KendaraanUncheckedUpdateWithoutTransaksiInput>
  }

  export type KendaraanUpdateWithoutTransaksiInput = {
    plat?: StringFieldUpdateOperationsInput | string
    merk?: StringFieldUpdateOperationsInput | string
    warna?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    bahan_bakar?: StringFieldUpdateOperationsInput | string
    cc?: IntFieldUpdateOperationsInput | number
    harga_sewa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis?: JenisUpdateOneRequiredWithoutKendaraanNestedInput
    foto?: FotoUpdateManyWithoutKendaraanNestedInput
  }

  export type KendaraanUncheckedUpdateWithoutTransaksiInput = {
    plat?: StringFieldUpdateOperationsInput | string
    merk?: StringFieldUpdateOperationsInput | string
    warna?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    bahan_bakar?: StringFieldUpdateOperationsInput | string
    cc?: IntFieldUpdateOperationsInput | number
    harga_sewa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKendaraan?: StringFieldUpdateOperationsInput | string
    foto?: FotoUncheckedUpdateManyWithoutKendaraanNestedInput
  }

  export type CustomerUpsertWithoutTransaksiInput = {
    update: XOR<CustomerUpdateWithoutTransaksiInput, CustomerUncheckedUpdateWithoutTransaksiInput>
    create: XOR<CustomerCreateWithoutTransaksiInput, CustomerUncheckedCreateWithoutTransaksiInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTransaksiInput, CustomerUncheckedUpdateWithoutTransaksiInput>
  }

  export type CustomerUpdateWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    hp?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    hp?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KendaraanCreateWithoutFotoInput = {
    plat: string
    merk: string
    warna: string
    tahun: string
    bahan_bakar: string
    cc: number
    harga_sewa: Decimal | DecimalJsLike | number | string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jenis: JenisCreateNestedOneWithoutKendaraanInput
    transaksi?: TransaksiCreateNestedManyWithoutKendaraanInput
  }

  export type KendaraanUncheckedCreateWithoutFotoInput = {
    plat: string
    merk: string
    warna: string
    tahun: string
    bahan_bakar: string
    cc: number
    harga_sewa: Decimal | DecimalJsLike | number | string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jenisKendaraan: string
    transaksi?: TransaksiUncheckedCreateNestedManyWithoutKendaraanInput
  }

  export type KendaraanCreateOrConnectWithoutFotoInput = {
    where: KendaraanWhereUniqueInput
    create: XOR<KendaraanCreateWithoutFotoInput, KendaraanUncheckedCreateWithoutFotoInput>
  }

  export type KendaraanUpsertWithoutFotoInput = {
    update: XOR<KendaraanUpdateWithoutFotoInput, KendaraanUncheckedUpdateWithoutFotoInput>
    create: XOR<KendaraanCreateWithoutFotoInput, KendaraanUncheckedCreateWithoutFotoInput>
    where?: KendaraanWhereInput
  }

  export type KendaraanUpdateToOneWithWhereWithoutFotoInput = {
    where?: KendaraanWhereInput
    data: XOR<KendaraanUpdateWithoutFotoInput, KendaraanUncheckedUpdateWithoutFotoInput>
  }

  export type KendaraanUpdateWithoutFotoInput = {
    plat?: StringFieldUpdateOperationsInput | string
    merk?: StringFieldUpdateOperationsInput | string
    warna?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    bahan_bakar?: StringFieldUpdateOperationsInput | string
    cc?: IntFieldUpdateOperationsInput | number
    harga_sewa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenis?: JenisUpdateOneRequiredWithoutKendaraanNestedInput
    transaksi?: TransaksiUpdateManyWithoutKendaraanNestedInput
  }

  export type KendaraanUncheckedUpdateWithoutFotoInput = {
    plat?: StringFieldUpdateOperationsInput | string
    merk?: StringFieldUpdateOperationsInput | string
    warna?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    bahan_bakar?: StringFieldUpdateOperationsInput | string
    cc?: IntFieldUpdateOperationsInput | number
    harga_sewa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jenisKendaraan?: StringFieldUpdateOperationsInput | string
    transaksi?: TransaksiUncheckedUpdateManyWithoutKendaraanNestedInput
  }

  export type KendaraanCreateWithoutJenisInput = {
    plat: string
    merk: string
    warna: string
    tahun: string
    bahan_bakar: string
    cc: number
    harga_sewa: Decimal | DecimalJsLike | number | string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    foto?: FotoCreateNestedManyWithoutKendaraanInput
    transaksi?: TransaksiCreateNestedManyWithoutKendaraanInput
  }

  export type KendaraanUncheckedCreateWithoutJenisInput = {
    plat: string
    merk: string
    warna: string
    tahun: string
    bahan_bakar: string
    cc: number
    harga_sewa: Decimal | DecimalJsLike | number | string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    foto?: FotoUncheckedCreateNestedManyWithoutKendaraanInput
    transaksi?: TransaksiUncheckedCreateNestedManyWithoutKendaraanInput
  }

  export type KendaraanCreateOrConnectWithoutJenisInput = {
    where: KendaraanWhereUniqueInput
    create: XOR<KendaraanCreateWithoutJenisInput, KendaraanUncheckedCreateWithoutJenisInput>
  }

  export type KendaraanCreateManyJenisInputEnvelope = {
    data: KendaraanCreateManyJenisInput | KendaraanCreateManyJenisInput[]
    skipDuplicates?: boolean
  }

  export type KendaraanUpsertWithWhereUniqueWithoutJenisInput = {
    where: KendaraanWhereUniqueInput
    update: XOR<KendaraanUpdateWithoutJenisInput, KendaraanUncheckedUpdateWithoutJenisInput>
    create: XOR<KendaraanCreateWithoutJenisInput, KendaraanUncheckedCreateWithoutJenisInput>
  }

  export type KendaraanUpdateWithWhereUniqueWithoutJenisInput = {
    where: KendaraanWhereUniqueInput
    data: XOR<KendaraanUpdateWithoutJenisInput, KendaraanUncheckedUpdateWithoutJenisInput>
  }

  export type KendaraanUpdateManyWithWhereWithoutJenisInput = {
    where: KendaraanScalarWhereInput
    data: XOR<KendaraanUpdateManyMutationInput, KendaraanUncheckedUpdateManyWithoutJenisInput>
  }

  export type KendaraanScalarWhereInput = {
    AND?: KendaraanScalarWhereInput | KendaraanScalarWhereInput[]
    OR?: KendaraanScalarWhereInput[]
    NOT?: KendaraanScalarWhereInput | KendaraanScalarWhereInput[]
    plat?: StringFilter<"Kendaraan"> | string
    merk?: StringFilter<"Kendaraan"> | string
    warna?: StringFilter<"Kendaraan"> | string
    tahun?: StringFilter<"Kendaraan"> | string
    bahan_bakar?: StringFilter<"Kendaraan"> | string
    cc?: IntFilter<"Kendaraan"> | number
    harga_sewa?: DecimalFilter<"Kendaraan"> | Decimal | DecimalJsLike | number | string
    status?: BoolFilter<"Kendaraan"> | boolean
    createdAt?: DateTimeFilter<"Kendaraan"> | Date | string
    updatedAt?: DateTimeFilter<"Kendaraan"> | Date | string
    jenisKendaraan?: StringFilter<"Kendaraan"> | string
  }

  export type TransaksiCreateManyCustomerInput = {
    transaksiId?: string
    kendaraan_plat: string
    tgl_mulai_sewa: Date | string
    tgl_selesai_sewa: Date | string
    total_harga?: Decimal | DecimalJsLike | number | string
    deskripsi: string
    url_foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiUpdateWithoutCustomerInput = {
    transaksiId?: StringFieldUpdateOperationsInput | string
    tgl_mulai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_selesai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    url_foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kendaraan?: KendaraanUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateWithoutCustomerInput = {
    transaksiId?: StringFieldUpdateOperationsInput | string
    kendaraan_plat?: StringFieldUpdateOperationsInput | string
    tgl_mulai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_selesai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    url_foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiUncheckedUpdateManyWithoutCustomerInput = {
    transaksiId?: StringFieldUpdateOperationsInput | string
    kendaraan_plat?: StringFieldUpdateOperationsInput | string
    tgl_mulai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_selesai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    url_foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FotoCreateManyKendaraanInput = {
    image_id?: string
    title: string
    image: string
  }

  export type TransaksiCreateManyKendaraanInput = {
    transaksiId?: string
    customer_id: string
    tgl_mulai_sewa: Date | string
    tgl_selesai_sewa: Date | string
    total_harga?: Decimal | DecimalJsLike | number | string
    deskripsi: string
    url_foto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FotoUpdateWithoutKendaraanInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type FotoUncheckedUpdateWithoutKendaraanInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type FotoUncheckedUpdateManyWithoutKendaraanInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type TransaksiUpdateWithoutKendaraanInput = {
    transaksiId?: StringFieldUpdateOperationsInput | string
    tgl_mulai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_selesai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    url_foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateWithoutKendaraanInput = {
    transaksiId?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    tgl_mulai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_selesai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    url_foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiUncheckedUpdateManyWithoutKendaraanInput = {
    transaksiId?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    tgl_mulai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tgl_selesai_sewa?: DateTimeFieldUpdateOperationsInput | Date | string
    total_harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    url_foto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KendaraanCreateManyJenisInput = {
    plat: string
    merk: string
    warna: string
    tahun: string
    bahan_bakar: string
    cc: number
    harga_sewa: Decimal | DecimalJsLike | number | string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KendaraanUpdateWithoutJenisInput = {
    plat?: StringFieldUpdateOperationsInput | string
    merk?: StringFieldUpdateOperationsInput | string
    warna?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    bahan_bakar?: StringFieldUpdateOperationsInput | string
    cc?: IntFieldUpdateOperationsInput | number
    harga_sewa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: FotoUpdateManyWithoutKendaraanNestedInput
    transaksi?: TransaksiUpdateManyWithoutKendaraanNestedInput
  }

  export type KendaraanUncheckedUpdateWithoutJenisInput = {
    plat?: StringFieldUpdateOperationsInput | string
    merk?: StringFieldUpdateOperationsInput | string
    warna?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    bahan_bakar?: StringFieldUpdateOperationsInput | string
    cc?: IntFieldUpdateOperationsInput | number
    harga_sewa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: FotoUncheckedUpdateManyWithoutKendaraanNestedInput
    transaksi?: TransaksiUncheckedUpdateManyWithoutKendaraanNestedInput
  }

  export type KendaraanUncheckedUpdateManyWithoutJenisInput = {
    plat?: StringFieldUpdateOperationsInput | string
    merk?: StringFieldUpdateOperationsInput | string
    warna?: StringFieldUpdateOperationsInput | string
    tahun?: StringFieldUpdateOperationsInput | string
    bahan_bakar?: StringFieldUpdateOperationsInput | string
    cc?: IntFieldUpdateOperationsInput | number
    harga_sewa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KendaraanCountOutputTypeDefaultArgs instead
     */
    export type KendaraanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KendaraanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JenisCountOutputTypeDefaultArgs instead
     */
    export type JenisCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JenisCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactDefaultArgs instead
     */
    export type ContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KendaraanDefaultArgs instead
     */
    export type KendaraanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KendaraanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransaksiDefaultArgs instead
     */
    export type TransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransaksiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FotoDefaultArgs instead
     */
    export type FotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FotoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JenisDefaultArgs instead
     */
    export type JenisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JenisDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PegawaiDefaultArgs instead
     */
    export type PegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PegawaiDefaultArgs<ExtArgs>

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