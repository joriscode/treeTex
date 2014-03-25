/** @constructor */
ScalaJS.c.scala_Predef$ = (function() {
  ScalaJS.c.scala_LowPriorityImplicits.call(this);
  this.Map$2 = null;
  this.Set$2 = null;
  this.ClassManifest$2 = null;
  this.Manifest$2 = null;
  this.NoManifest$2 = null;
  this.$$scope$2 = null;
  this.StringCanBuildFrom$2 = null;
  this.singleton$und$less$colon$less$2 = null;
  this.scala$Predef$$singleton$und$eq$colon$eq$f = null
});
ScalaJS.c.scala_Predef$.prototype = new ScalaJS.inheritable.scala_LowPriorityImplicits();
ScalaJS.c.scala_Predef$.prototype.constructor = ScalaJS.c.scala_Predef$;
ScalaJS.c.scala_Predef$.prototype.classOf__Ljava_lang_Class = (function() {
  return null
});
ScalaJS.c.scala_Predef$.prototype.Map__Lscala_collection_immutable_Map$ = (function() {
  return this.Map$2
});
ScalaJS.c.scala_Predef$.prototype.Set__Lscala_collection_immutable_Set$ = (function() {
  return this.Set$2
});
ScalaJS.c.scala_Predef$.prototype.ClassManifest__Lscala_reflect_ClassManifestFactory$ = (function() {
  return this.ClassManifest$2
});
ScalaJS.c.scala_Predef$.prototype.Manifest__Lscala_reflect_ManifestFactory$ = (function() {
  return this.Manifest$2
});
ScalaJS.c.scala_Predef$.prototype.NoManifest__Lscala_reflect_NoManifest$ = (function() {
  return this.NoManifest$2
});
ScalaJS.c.scala_Predef$.prototype.manifest__Lscala_reflect_Manifest__Lscala_reflect_Manifest = (function(m) {
  return m
});
ScalaJS.c.scala_Predef$.prototype.classManifest__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag = (function(m) {
  return m
});
ScalaJS.c.scala_Predef$.prototype.optManifest__Lscala_reflect_OptManifest__Lscala_reflect_OptManifest = (function(m) {
  return m
});
ScalaJS.c.scala_Predef$.prototype.identity__O__O = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.implicitly__O__O = (function(e) {
  return e
});
ScalaJS.c.scala_Predef$.prototype.locally__O__O = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.$$scope__Lscala_xml_TopScope$ = (function() {
  return this.$$scope$2
});
ScalaJS.c.scala_Predef$.prototype.error__T__Lscala_Nothing = (function(message) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(message)
});
ScalaJS.c.scala_Predef$.prototype.exit__Lscala_Nothing = (function() {
  return ScalaJS.modules.scala_sys_package().exit__Lscala_Nothing()
});
ScalaJS.c.scala_Predef$.prototype.exit__I__Lscala_Nothing = (function(status) {
  return ScalaJS.modules.scala_sys_package().exit__I__Lscala_Nothing(status)
});
ScalaJS.c.scala_Predef$.prototype.format__T__Lscala_collection_Seq__T = (function(text, xs) {
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(this.augmentString__T__T(text)).format__Lscala_collection_Seq__T(xs)
});
ScalaJS.c.scala_Predef$.prototype.assert__Z__V = (function(assertion) {
  if ((!assertion)) {
    throw new ScalaJS.c.java_lang_AssertionError().init___O("assertion failed")
  }
});
ScalaJS.c.scala_Predef$.prototype.assert__Z__Lscala_Function0__V = (function(assertion, message) {
  if ((!assertion)) {
    throw new ScalaJS.c.java_lang_AssertionError().init___O(("assertion failed: " + message.apply__O()))
  }
});
ScalaJS.c.scala_Predef$.prototype.assume__Z__V = (function(assumption) {
  if ((!assumption)) {
    throw new ScalaJS.c.java_lang_AssertionError().init___O("assumption failed")
  }
});
ScalaJS.c.scala_Predef$.prototype.assume__Z__Lscala_Function0__V = (function(assumption, message) {
  if ((!assumption)) {
    throw new ScalaJS.c.java_lang_AssertionError().init___O(("assumption failed: " + message.apply__O()))
  }
});
ScalaJS.c.scala_Predef$.prototype.require__Z__V = (function(requirement) {
  if ((!requirement)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("requirement failed")
  }
});
ScalaJS.c.scala_Predef$.prototype.require__Z__Lscala_Function0__V = (function(requirement, message) {
  if ((!requirement)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(("requirement failed: " + message.apply__O()))
  }
});
ScalaJS.c.scala_Predef$.prototype.any2Ensuring__O__O = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.$$qmark$qmark$qmark__Lscala_Nothing = (function() {
  throw new ScalaJS.c.scala_NotImplementedError().init___()
});
ScalaJS.c.scala_Predef$.prototype.any2ArrowAssoc__O__O = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.print__O__V = (function(x) {
  ScalaJS.modules.scala_Console().print__O__V(x)
});
ScalaJS.c.scala_Predef$.prototype.println__V = (function() {
  ScalaJS.modules.scala_Console().println__V()
});
ScalaJS.c.scala_Predef$.prototype.println__O__V = (function(x) {
  ScalaJS.modules.scala_Console().println__O__V(x)
});
ScalaJS.c.scala_Predef$.prototype.printf__T__Lscala_collection_Seq__V = (function(text, xs) {
  ScalaJS.modules.scala_Console().print__O__V(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(this.augmentString__T__T(text)).format__Lscala_collection_Seq__T(xs))
});
ScalaJS.c.scala_Predef$.prototype.readLine__T = (function() {
  return ScalaJS.modules.scala_Console().readLine__T()
});
ScalaJS.c.scala_Predef$.prototype.readLine__T__Lscala_collection_Seq__T = (function(text, args) {
  return ScalaJS.modules.scala_Console().readLine__T__Lscala_collection_Seq__T(text, args)
});
ScalaJS.c.scala_Predef$.prototype.readBoolean__Z = (function() {
  return ScalaJS.modules.scala_Console().readBoolean__Z()
});
ScalaJS.c.scala_Predef$.prototype.readByte__B = (function() {
  return ScalaJS.modules.scala_Console().readByte__B()
});
ScalaJS.c.scala_Predef$.prototype.readShort__S = (function() {
  return ScalaJS.modules.scala_Console().readShort__S()
});
ScalaJS.c.scala_Predef$.prototype.readChar__C = (function() {
  return ScalaJS.modules.scala_Console().readChar__C()
});
ScalaJS.c.scala_Predef$.prototype.readInt__I = (function() {
  return ScalaJS.modules.scala_Console().readInt__I()
});
ScalaJS.c.scala_Predef$.prototype.readLong__J = (function() {
  return ScalaJS.modules.scala_Console().readLong__J()
});
ScalaJS.c.scala_Predef$.prototype.readFloat__F = (function() {
  return ScalaJS.modules.scala_Console().readFloat__F()
});
ScalaJS.c.scala_Predef$.prototype.readDouble__D = (function() {
  return ScalaJS.modules.scala_Console().readDouble__D()
});
ScalaJS.c.scala_Predef$.prototype.readf__T__Lscala_collection_immutable_List = (function(format) {
  return ScalaJS.modules.scala_Console().readf__T__Lscala_collection_immutable_List(format)
});
ScalaJS.c.scala_Predef$.prototype.readf1__T__O = (function(format) {
  return ScalaJS.modules.scala_Console().readf1__T__O(format)
});
ScalaJS.c.scala_Predef$.prototype.readf2__T__Lscala_Tuple2 = (function(format) {
  return ScalaJS.modules.scala_Console().readf2__T__Lscala_Tuple2(format)
});
ScalaJS.c.scala_Predef$.prototype.readf3__T__Lscala_Tuple3 = (function(format) {
  return ScalaJS.modules.scala_Console().readf3__T__Lscala_Tuple3(format)
});
ScalaJS.c.scala_Predef$.prototype.exceptionWrapper__Ljava_lang_Throwable__Lscala_runtime_RichException = (function(exc) {
  return new ScalaJS.c.scala_runtime_RichException().init___Ljava_lang_Throwable(exc)
});
ScalaJS.c.scala_Predef$.prototype.tuple2ToZippedOps__Lscala_Tuple2__Lscala_Tuple2 = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.tuple3ToZippedOps__Lscala_Tuple3__Lscala_Tuple3 = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.seqToCharSequence__Lscala_collection_IndexedSeq__Ljava_lang_CharSequence = (function(xs) {
  return new ScalaJS.c.scala_runtime_SeqCharSequence().init___Lscala_collection_IndexedSeq(xs)
});
ScalaJS.c.scala_Predef$.prototype.arrayToCharSequence__AC__Ljava_lang_CharSequence = (function(xs) {
  return new ScalaJS.c.scala_runtime_ArrayCharSequence().init___AC__I__I(xs, 0, xs.underlying.length)
});
ScalaJS.c.scala_Predef$.prototype.genericArrayOps__O__Lscala_collection_mutable_ArrayOps = (function(xs) {
  var x1 = xs;
  if (ScalaJS.isArrayOf.java_lang_Object(x1, 1)) {
    var x2 = ScalaJS.asArrayOf.java_lang_Object(x1, 1);
    return this.refArrayOps__AO__Lscala_collection_mutable_ArrayOps(x2)
  };
  if (ScalaJS.isArrayOf.scala_Boolean(x1, 1)) {
    var x3 = ScalaJS.asArrayOf.scala_Boolean(x1, 1);
    return this.booleanArrayOps__AZ__Lscala_collection_mutable_ArrayOps(x3)
  };
  if (ScalaJS.isArrayOf.scala_Byte(x1, 1)) {
    var x4 = ScalaJS.asArrayOf.scala_Byte(x1, 1);
    return this.byteArrayOps__AB__Lscala_collection_mutable_ArrayOps(x4)
  };
  if (ScalaJS.isArrayOf.scala_Char(x1, 1)) {
    var x5 = ScalaJS.asArrayOf.scala_Char(x1, 1);
    return this.charArrayOps__AC__Lscala_collection_mutable_ArrayOps(x5)
  };
  if (ScalaJS.isArrayOf.scala_Double(x1, 1)) {
    var x6 = ScalaJS.asArrayOf.scala_Double(x1, 1);
    return this.doubleArrayOps__AD__Lscala_collection_mutable_ArrayOps(x6)
  };
  if (ScalaJS.isArrayOf.scala_Float(x1, 1)) {
    var x7 = ScalaJS.asArrayOf.scala_Float(x1, 1);
    return this.floatArrayOps__AF__Lscala_collection_mutable_ArrayOps(x7)
  };
  if (ScalaJS.isArrayOf.scala_Int(x1, 1)) {
    var x8 = ScalaJS.asArrayOf.scala_Int(x1, 1);
    return this.intArrayOps__AI__Lscala_collection_mutable_ArrayOps(x8)
  };
  if (ScalaJS.isArrayOf.scala_Long(x1, 1)) {
    var x9 = ScalaJS.asArrayOf.scala_Long(x1, 1);
    return this.longArrayOps__AJ__Lscala_collection_mutable_ArrayOps(x9)
  };
  if (ScalaJS.isArrayOf.scala_Short(x1, 1)) {
    var x10 = ScalaJS.asArrayOf.scala_Short(x1, 1);
    return this.shortArrayOps__AS__Lscala_collection_mutable_ArrayOps(x10)
  };
  if (ScalaJS.isArrayOf.scala_runtime_BoxedUnit(x1, 1)) {
    var x11 = ScalaJS.asArrayOf.scala_runtime_BoxedUnit(x1, 1);
    return this.unitArrayOps__ALscala_runtime_BoxedUnit__Lscala_collection_mutable_ArrayOps(x11)
  };
  if (ScalaJS.anyRefEqEq(null, x1)) {
    return null
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_Predef$.prototype.booleanArrayOps__AZ__Lscala_collection_mutable_ArrayOps = (function(xs) {
  return new ScalaJS.c.scala_collection_mutable_ArrayOps$ofBoolean().init___AZ(xs)
});
ScalaJS.c.scala_Predef$.prototype.byteArrayOps__AB__Lscala_collection_mutable_ArrayOps = (function(xs) {
  return new ScalaJS.c.scala_collection_mutable_ArrayOps$ofByte().init___AB(xs)
});
ScalaJS.c.scala_Predef$.prototype.charArrayOps__AC__Lscala_collection_mutable_ArrayOps = (function(xs) {
  return new ScalaJS.c.scala_collection_mutable_ArrayOps$ofChar().init___AC(xs)
});
ScalaJS.c.scala_Predef$.prototype.doubleArrayOps__AD__Lscala_collection_mutable_ArrayOps = (function(xs) {
  return new ScalaJS.c.scala_collection_mutable_ArrayOps$ofDouble().init___AD(xs)
});
ScalaJS.c.scala_Predef$.prototype.floatArrayOps__AF__Lscala_collection_mutable_ArrayOps = (function(xs) {
  return new ScalaJS.c.scala_collection_mutable_ArrayOps$ofFloat().init___AF(xs)
});
ScalaJS.c.scala_Predef$.prototype.intArrayOps__AI__Lscala_collection_mutable_ArrayOps = (function(xs) {
  return new ScalaJS.c.scala_collection_mutable_ArrayOps$ofInt().init___AI(xs)
});
ScalaJS.c.scala_Predef$.prototype.longArrayOps__AJ__Lscala_collection_mutable_ArrayOps = (function(xs) {
  return new ScalaJS.c.scala_collection_mutable_ArrayOps$ofLong().init___AJ(xs)
});
ScalaJS.c.scala_Predef$.prototype.refArrayOps__AO__Lscala_collection_mutable_ArrayOps = (function(xs) {
  return new ScalaJS.c.scala_collection_mutable_ArrayOps$ofRef().init___AO(xs)
});
ScalaJS.c.scala_Predef$.prototype.shortArrayOps__AS__Lscala_collection_mutable_ArrayOps = (function(xs) {
  return new ScalaJS.c.scala_collection_mutable_ArrayOps$ofShort().init___AS(xs)
});
ScalaJS.c.scala_Predef$.prototype.unitArrayOps__ALscala_runtime_BoxedUnit__Lscala_collection_mutable_ArrayOps = (function(xs) {
  return new ScalaJS.c.scala_collection_mutable_ArrayOps$ofUnit().init___ALscala_runtime_BoxedUnit(xs)
});
ScalaJS.c.scala_Predef$.prototype.byte2short__B__S = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.byte2int__B__I = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.byte2long__B__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromByte__B__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.scala_Predef$.prototype.byte2float__B__F = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.byte2double__B__D = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.short2int__S__I = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.short2long__S__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromShort__S__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.scala_Predef$.prototype.short2float__S__F = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.short2double__S__D = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.char2int__C__I = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.char2long__C__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.scala_Predef$.prototype.char2float__C__F = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.char2double__C__D = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.int2long__I__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.scala_Predef$.prototype.int2float__I__F = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.int2double__I__D = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.long2float__J__F = (function(x) {
  return x.toFloat__F()
});
ScalaJS.c.scala_Predef$.prototype.long2double__J__D = (function(x) {
  return x.toDouble__D()
});
ScalaJS.c.scala_Predef$.prototype.float2double__F__D = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.byte2Byte__B__Ljava_lang_Byte = (function(x) {
  return ScalaJS.modules.java_lang_Byte().valueOf__B__Ljava_lang_Byte(x)
});
ScalaJS.c.scala_Predef$.prototype.short2Short__S__Ljava_lang_Short = (function(x) {
  return ScalaJS.modules.java_lang_Short().valueOf__S__Ljava_lang_Short(x)
});
ScalaJS.c.scala_Predef$.prototype.char2Character__C__Ljava_lang_Character = (function(x) {
  return ScalaJS.modules.java_lang_Character().valueOf__C__Ljava_lang_Character(x)
});
ScalaJS.c.scala_Predef$.prototype.int2Integer__I__Ljava_lang_Integer = (function(x) {
  return ScalaJS.modules.java_lang_Integer().valueOf__I__Ljava_lang_Integer(x)
});
ScalaJS.c.scala_Predef$.prototype.long2Long__J__Ljava_lang_Long = (function(x) {
  return ScalaJS.modules.java_lang_Long().valueOf__J__Ljava_lang_Long(x)
});
ScalaJS.c.scala_Predef$.prototype.float2Float__F__Ljava_lang_Float = (function(x) {
  return ScalaJS.modules.java_lang_Float().valueOf__F__Ljava_lang_Float(x)
});
ScalaJS.c.scala_Predef$.prototype.double2Double__D__Ljava_lang_Double = (function(x) {
  return ScalaJS.modules.java_lang_Double().valueOf__D__Ljava_lang_Double(x)
});
ScalaJS.c.scala_Predef$.prototype.boolean2Boolean__Z__Ljava_lang_Boolean = (function(x) {
  return ScalaJS.modules.java_lang_Boolean().valueOf__Z__Ljava_lang_Boolean(x)
});
ScalaJS.c.scala_Predef$.prototype.byte2ByteConflict__B__O = (function(x) {
  return new ScalaJS.c.java_lang_Object().init___()
});
ScalaJS.c.scala_Predef$.prototype.short2ShortConflict__S__O = (function(x) {
  return new ScalaJS.c.java_lang_Object().init___()
});
ScalaJS.c.scala_Predef$.prototype.char2CharacterConflict__C__O = (function(x) {
  return new ScalaJS.c.java_lang_Object().init___()
});
ScalaJS.c.scala_Predef$.prototype.int2IntegerConflict__I__O = (function(x) {
  return new ScalaJS.c.java_lang_Object().init___()
});
ScalaJS.c.scala_Predef$.prototype.long2LongConflict__J__O = (function(x) {
  return new ScalaJS.c.java_lang_Object().init___()
});
ScalaJS.c.scala_Predef$.prototype.float2FloatConflict__F__O = (function(x) {
  return new ScalaJS.c.java_lang_Object().init___()
});
ScalaJS.c.scala_Predef$.prototype.double2DoubleConflict__D__O = (function(x) {
  return new ScalaJS.c.java_lang_Object().init___()
});
ScalaJS.c.scala_Predef$.prototype.boolean2BooleanConflict__Z__O = (function(x) {
  return new ScalaJS.c.java_lang_Object().init___()
});
ScalaJS.c.scala_Predef$.prototype.Byte2byte__Ljava_lang_Byte__B = (function(x) {
  return x.byteValue__B()
});
ScalaJS.c.scala_Predef$.prototype.Short2short__Ljava_lang_Short__S = (function(x) {
  return x.shortValue__S()
});
ScalaJS.c.scala_Predef$.prototype.Character2char__Ljava_lang_Character__C = (function(x) {
  return x.charValue__C()
});
ScalaJS.c.scala_Predef$.prototype.Integer2int__Ljava_lang_Integer__I = (function(x) {
  return x.intValue__I()
});
ScalaJS.c.scala_Predef$.prototype.Long2long__Ljava_lang_Long__J = (function(x) {
  return x.longValue__J()
});
ScalaJS.c.scala_Predef$.prototype.Float2float__Ljava_lang_Float__F = (function(x) {
  return x.floatValue__F()
});
ScalaJS.c.scala_Predef$.prototype.Double2double__Ljava_lang_Double__D = (function(x) {
  return x.doubleValue__D()
});
ScalaJS.c.scala_Predef$.prototype.Boolean2boolean__Ljava_lang_Boolean__Z = (function(x) {
  return x.booleanValue__Z()
});
ScalaJS.c.scala_Predef$.prototype.any2stringfmt__O__O = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.augmentString__T__T = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.any2stringadd__O__O = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.unaugmentString__T__T = (function(x) {
  return x
});
ScalaJS.c.scala_Predef$.prototype.stringCanBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.StringCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_Predef$.prototype.StringCanBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.StringCanBuildFrom$2
});
ScalaJS.c.scala_Predef$.prototype.conforms__Lscala_Predef$$less$colon$less = (function() {
  return this.singleton$und$less$colon$less$2
});
ScalaJS.c.scala_Predef$.prototype.init___ = (function() {
  ScalaJS.c.scala_LowPriorityImplicits.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_Predef = this;
  ScalaJS.modules.scala_package();
  ScalaJS.modules.scala_collection_immutable_List();
  this.Map$2 = ScalaJS.modules.scala_collection_immutable_Map();
  this.Set$2 = ScalaJS.modules.scala_collection_immutable_Set();
  this.ClassManifest$2 = ScalaJS.modules.scala_reflect_package().ClassManifest__Lscala_reflect_ClassManifestFactory$();
  this.Manifest$2 = ScalaJS.modules.scala_reflect_package().Manifest__Lscala_reflect_ManifestFactory$();
  this.NoManifest$2 = ScalaJS.modules.scala_reflect_NoManifest();
  this.$$scope$2 = ScalaJS.modules.scala_xml_TopScope();
  this.StringCanBuildFrom$2 = new ScalaJS.c.scala_Predef$$anon$3().init___();
  this.singleton$und$less$colon$less$2 = new ScalaJS.c.scala_Predef$$anon$1().init___();
  this.scala$Predef$$singleton$und$eq$colon$eq$f = new ScalaJS.c.scala_Predef$$anon$2().init___();
  return this
});
ScalaJS.c.scala_Predef$.prototype.conforms__ = (function() {
  return this.conforms__Lscala_Predef$$less$colon$less()
});
ScalaJS.c.scala_Predef$.prototype.StringCanBuildFrom__ = (function() {
  return this.StringCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_Predef$.prototype.stringCanBuildFrom__ = (function() {
  return this.stringCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_Predef$.prototype.unaugmentString__T__ = (function(x) {
  return this.unaugmentString__T__T(x)
});
ScalaJS.c.scala_Predef$.prototype.any2stringadd__O__ = (function(x$2) {
  return new ScalaJS.c.scala_runtime_StringAdd().init___O(this.any2stringadd__O__O(x$2))
});
ScalaJS.c.scala_Predef$.prototype.augmentString__T__ = (function(x$3) {
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(this.augmentString__T__T(x$3))
});
ScalaJS.c.scala_Predef$.prototype.any2stringfmt__O__ = (function(x$4) {
  return new ScalaJS.c.scala_runtime_StringFormat().init___O(this.any2stringfmt__O__O(x$4))
});
ScalaJS.c.scala_Predef$.prototype.Boolean2boolean__Ljava_lang_Boolean__ = (function(x$5) {
  return ScalaJS.bZ(this.Boolean2boolean__Ljava_lang_Boolean__Z(x$5))
});
ScalaJS.c.scala_Predef$.prototype.Double2double__Ljava_lang_Double__ = (function(x$6) {
  return ScalaJS.bD(this.Double2double__Ljava_lang_Double__D(x$6))
});
ScalaJS.c.scala_Predef$.prototype.Float2float__Ljava_lang_Float__ = (function(x$7) {
  return ScalaJS.bF(this.Float2float__Ljava_lang_Float__F(x$7))
});
ScalaJS.c.scala_Predef$.prototype.Long2long__Ljava_lang_Long__ = (function(x$8) {
  return ScalaJS.bJ(this.Long2long__Ljava_lang_Long__J(x$8))
});
ScalaJS.c.scala_Predef$.prototype.Integer2int__Ljava_lang_Integer__ = (function(x$9) {
  return ScalaJS.bI(this.Integer2int__Ljava_lang_Integer__I(x$9))
});
ScalaJS.c.scala_Predef$.prototype.Character2char__Ljava_lang_Character__ = (function(x$10) {
  return ScalaJS.bC(this.Character2char__Ljava_lang_Character__C(x$10))
});
ScalaJS.c.scala_Predef$.prototype.Short2short__Ljava_lang_Short__ = (function(x$11) {
  return ScalaJS.bS(this.Short2short__Ljava_lang_Short__S(x$11))
});
ScalaJS.c.scala_Predef$.prototype.Byte2byte__Ljava_lang_Byte__ = (function(x$12) {
  return ScalaJS.bB(this.Byte2byte__Ljava_lang_Byte__B(x$12))
});
ScalaJS.c.scala_Predef$.prototype.boolean2BooleanConflict__Z__ = (function(x$13) {
  return this.boolean2BooleanConflict__Z__O(x$13)
});
ScalaJS.c.scala_Predef$.prototype.double2DoubleConflict__D__ = (function(x$14) {
  return this.double2DoubleConflict__D__O(x$14)
});
ScalaJS.c.scala_Predef$.prototype.float2FloatConflict__F__ = (function(x$15) {
  return this.float2FloatConflict__F__O(x$15)
});
ScalaJS.c.scala_Predef$.prototype.long2LongConflict__J__ = (function(x$16) {
  return this.long2LongConflict__J__O(x$16)
});
ScalaJS.c.scala_Predef$.prototype.int2IntegerConflict__I__ = (function(x$17) {
  return this.int2IntegerConflict__I__O(x$17)
});
ScalaJS.c.scala_Predef$.prototype.char2CharacterConflict__C__ = (function(x$18) {
  return this.char2CharacterConflict__C__O(x$18)
});
ScalaJS.c.scala_Predef$.prototype.short2ShortConflict__S__ = (function(x$19) {
  return this.short2ShortConflict__S__O(x$19)
});
ScalaJS.c.scala_Predef$.prototype.byte2ByteConflict__B__ = (function(x$20) {
  return this.byte2ByteConflict__B__O(x$20)
});
ScalaJS.c.scala_Predef$.prototype.boolean2Boolean__Z__ = (function(x$21) {
  return this.boolean2Boolean__Z__Ljava_lang_Boolean(x$21)
});
ScalaJS.c.scala_Predef$.prototype.double2Double__D__ = (function(x$22) {
  return this.double2Double__D__Ljava_lang_Double(x$22)
});
ScalaJS.c.scala_Predef$.prototype.float2Float__F__ = (function(x$23) {
  return this.float2Float__F__Ljava_lang_Float(x$23)
});
ScalaJS.c.scala_Predef$.prototype.long2Long__J__ = (function(x$24) {
  return this.long2Long__J__Ljava_lang_Long(x$24)
});
ScalaJS.c.scala_Predef$.prototype.int2Integer__I__ = (function(x$25) {
  return this.int2Integer__I__Ljava_lang_Integer(x$25)
});
ScalaJS.c.scala_Predef$.prototype.char2Character__C__ = (function(x$26) {
  return this.char2Character__C__Ljava_lang_Character(x$26)
});
ScalaJS.c.scala_Predef$.prototype.short2Short__S__ = (function(x$27) {
  return this.short2Short__S__Ljava_lang_Short(x$27)
});
ScalaJS.c.scala_Predef$.prototype.byte2Byte__B__ = (function(x$28) {
  return this.byte2Byte__B__Ljava_lang_Byte(x$28)
});
ScalaJS.c.scala_Predef$.prototype.float2double__F__ = (function(x$29) {
  return ScalaJS.bD(this.float2double__F__D(x$29))
});
ScalaJS.c.scala_Predef$.prototype.long2double__J__ = (function(x$30) {
  return ScalaJS.bD(this.long2double__J__D(x$30))
});
ScalaJS.c.scala_Predef$.prototype.long2float__J__ = (function(x$31) {
  return ScalaJS.bF(this.long2float__J__F(x$31))
});
ScalaJS.c.scala_Predef$.prototype.int2double__I__ = (function(x$32) {
  return ScalaJS.bD(this.int2double__I__D(x$32))
});
ScalaJS.c.scala_Predef$.prototype.int2float__I__ = (function(x$33) {
  return ScalaJS.bF(this.int2float__I__F(x$33))
});
ScalaJS.c.scala_Predef$.prototype.int2long__I__ = (function(x$34) {
  return ScalaJS.bJ(this.int2long__I__J(x$34))
});
ScalaJS.c.scala_Predef$.prototype.char2double__C__ = (function(x$35) {
  return ScalaJS.bD(this.char2double__C__D(x$35))
});
ScalaJS.c.scala_Predef$.prototype.char2float__C__ = (function(x$36) {
  return ScalaJS.bF(this.char2float__C__F(x$36))
});
ScalaJS.c.scala_Predef$.prototype.char2long__C__ = (function(x$37) {
  return ScalaJS.bJ(this.char2long__C__J(x$37))
});
ScalaJS.c.scala_Predef$.prototype.char2int__C__ = (function(x$38) {
  return ScalaJS.bI(this.char2int__C__I(x$38))
});
ScalaJS.c.scala_Predef$.prototype.short2double__S__ = (function(x$39) {
  return ScalaJS.bD(this.short2double__S__D(x$39))
});
ScalaJS.c.scala_Predef$.prototype.short2float__S__ = (function(x$40) {
  return ScalaJS.bF(this.short2float__S__F(x$40))
});
ScalaJS.c.scala_Predef$.prototype.short2long__S__ = (function(x$41) {
  return ScalaJS.bJ(this.short2long__S__J(x$41))
});
ScalaJS.c.scala_Predef$.prototype.short2int__S__ = (function(x$42) {
  return ScalaJS.bI(this.short2int__S__I(x$42))
});
ScalaJS.c.scala_Predef$.prototype.byte2double__B__ = (function(x$43) {
  return ScalaJS.bD(this.byte2double__B__D(x$43))
});
ScalaJS.c.scala_Predef$.prototype.byte2float__B__ = (function(x$44) {
  return ScalaJS.bF(this.byte2float__B__F(x$44))
});
ScalaJS.c.scala_Predef$.prototype.byte2long__B__ = (function(x$45) {
  return ScalaJS.bJ(this.byte2long__B__J(x$45))
});
ScalaJS.c.scala_Predef$.prototype.byte2int__B__ = (function(x$46) {
  return ScalaJS.bI(this.byte2int__B__I(x$46))
});
ScalaJS.c.scala_Predef$.prototype.byte2short__B__ = (function(x$47) {
  return ScalaJS.bS(this.byte2short__B__S(x$47))
});
ScalaJS.c.scala_Predef$.prototype.unitArrayOps__ALscala_runtime_BoxedUnit__ = (function(xs) {
  return this.unitArrayOps__ALscala_runtime_BoxedUnit__Lscala_collection_mutable_ArrayOps(xs)
});
ScalaJS.c.scala_Predef$.prototype.shortArrayOps__AS__ = (function(xs$2) {
  return this.shortArrayOps__AS__Lscala_collection_mutable_ArrayOps(xs$2)
});
ScalaJS.c.scala_Predef$.prototype.refArrayOps__AO__ = (function(xs$3) {
  return this.refArrayOps__AO__Lscala_collection_mutable_ArrayOps(xs$3)
});
ScalaJS.c.scala_Predef$.prototype.longArrayOps__AJ__ = (function(xs$4) {
  return this.longArrayOps__AJ__Lscala_collection_mutable_ArrayOps(xs$4)
});
ScalaJS.c.scala_Predef$.prototype.intArrayOps__AI__ = (function(xs$5) {
  return this.intArrayOps__AI__Lscala_collection_mutable_ArrayOps(xs$5)
});
ScalaJS.c.scala_Predef$.prototype.floatArrayOps__AF__ = (function(xs$6) {
  return this.floatArrayOps__AF__Lscala_collection_mutable_ArrayOps(xs$6)
});
ScalaJS.c.scala_Predef$.prototype.doubleArrayOps__AD__ = (function(xs$7) {
  return this.doubleArrayOps__AD__Lscala_collection_mutable_ArrayOps(xs$7)
});
ScalaJS.c.scala_Predef$.prototype.charArrayOps__AC__ = (function(xs$8) {
  return this.charArrayOps__AC__Lscala_collection_mutable_ArrayOps(xs$8)
});
ScalaJS.c.scala_Predef$.prototype.byteArrayOps__AB__ = (function(xs$9) {
  return this.byteArrayOps__AB__Lscala_collection_mutable_ArrayOps(xs$9)
});
ScalaJS.c.scala_Predef$.prototype.booleanArrayOps__AZ__ = (function(xs$10) {
  return this.booleanArrayOps__AZ__Lscala_collection_mutable_ArrayOps(xs$10)
});
ScalaJS.c.scala_Predef$.prototype.genericArrayOps__O__ = (function(xs$11) {
  return this.genericArrayOps__O__Lscala_collection_mutable_ArrayOps(xs$11)
});
ScalaJS.c.scala_Predef$.prototype.arrayToCharSequence__AC__ = (function(xs$12) {
  return this.arrayToCharSequence__AC__Ljava_lang_CharSequence(xs$12)
});
ScalaJS.c.scala_Predef$.prototype.seqToCharSequence__Lscala_collection_IndexedSeq__ = (function(xs$13) {
  return this.seqToCharSequence__Lscala_collection_IndexedSeq__Ljava_lang_CharSequence(xs$13)
});
ScalaJS.c.scala_Predef$.prototype.tuple3ToZippedOps__Lscala_Tuple3__ = (function(x$48) {
  return new ScalaJS.c.scala_runtime_Tuple3Zipped$Ops().init___Lscala_Tuple3(this.tuple3ToZippedOps__Lscala_Tuple3__Lscala_Tuple3(x$48))
});
ScalaJS.c.scala_Predef$.prototype.tuple2ToZippedOps__Lscala_Tuple2__ = (function(x$49) {
  return new ScalaJS.c.scala_runtime_Tuple2Zipped$Ops().init___Lscala_Tuple2(this.tuple2ToZippedOps__Lscala_Tuple2__Lscala_Tuple2(x$49))
});
ScalaJS.c.scala_Predef$.prototype.exceptionWrapper__Ljava_lang_Throwable__ = (function(exc) {
  return this.exceptionWrapper__Ljava_lang_Throwable__Lscala_runtime_RichException(exc)
});
ScalaJS.c.scala_Predef$.prototype.readf3__T__ = (function(format) {
  return this.readf3__T__Lscala_Tuple3(format)
});
ScalaJS.c.scala_Predef$.prototype.readf2__T__ = (function(format$2) {
  return this.readf2__T__Lscala_Tuple2(format$2)
});
ScalaJS.c.scala_Predef$.prototype.readf1__T__ = (function(format$3) {
  return this.readf1__T__O(format$3)
});
ScalaJS.c.scala_Predef$.prototype.readf__T__ = (function(format$4) {
  return this.readf__T__Lscala_collection_immutable_List(format$4)
});
ScalaJS.c.scala_Predef$.prototype.readDouble__ = (function() {
  return ScalaJS.bD(this.readDouble__D())
});
ScalaJS.c.scala_Predef$.prototype.readFloat__ = (function() {
  return ScalaJS.bF(this.readFloat__F())
});
ScalaJS.c.scala_Predef$.prototype.readLong__ = (function() {
  return ScalaJS.bJ(this.readLong__J())
});
ScalaJS.c.scala_Predef$.prototype.readInt__ = (function() {
  return ScalaJS.bI(this.readInt__I())
});
ScalaJS.c.scala_Predef$.prototype.readChar__ = (function() {
  return ScalaJS.bC(this.readChar__C())
});
ScalaJS.c.scala_Predef$.prototype.readShort__ = (function() {
  return ScalaJS.bS(this.readShort__S())
});
ScalaJS.c.scala_Predef$.prototype.readByte__ = (function() {
  return ScalaJS.bB(this.readByte__B())
});
ScalaJS.c.scala_Predef$.prototype.readBoolean__ = (function() {
  return ScalaJS.bZ(this.readBoolean__Z())
});
ScalaJS.c.scala_Predef$.prototype.readLine__T__Lscala_collection_Seq__ = (function(text, args) {
  return this.readLine__T__Lscala_collection_Seq__T(text, args)
});
ScalaJS.c.scala_Predef$.prototype.readLine__ = (function() {
  return this.readLine__T()
});
ScalaJS.c.scala_Predef$.prototype.printf__T__Lscala_collection_Seq__ = (function(text$2, xs$14) {
  return ScalaJS.bV(this.printf__T__Lscala_collection_Seq__V(text$2, xs$14))
});
ScalaJS.c.scala_Predef$.prototype.println__O__ = (function(x$50) {
  return ScalaJS.bV(this.println__O__V(x$50))
});
ScalaJS.c.scala_Predef$.prototype.println__ = (function() {
  return ScalaJS.bV(this.println__V())
});
ScalaJS.c.scala_Predef$.prototype.print__O__ = (function(x$51) {
  return ScalaJS.bV(this.print__O__V(x$51))
});
ScalaJS.c.scala_Predef$.prototype.any2ArrowAssoc__O__ = (function(x$52) {
  return new ScalaJS.c.scala_Predef$ArrowAssoc().init___O(this.any2ArrowAssoc__O__O(x$52))
});
ScalaJS.c.scala_Predef$.prototype.$$qmark$qmark$qmark__ = (function() {
  return this.$$qmark$qmark$qmark__Lscala_Nothing()
});
ScalaJS.c.scala_Predef$.prototype.any2Ensuring__O__ = (function(x$53) {
  return new ScalaJS.c.scala_Predef$Ensuring().init___O(this.any2Ensuring__O__O(x$53))
});
ScalaJS.c.scala_Predef$.prototype.require__Z__Lscala_Function0__ = (function(requirement, message) {
  return ScalaJS.bV(this.require__Z__Lscala_Function0__V(requirement, message))
});
ScalaJS.c.scala_Predef$.prototype.require__Z__ = (function(requirement$2) {
  return ScalaJS.bV(this.require__Z__V(requirement$2))
});
ScalaJS.c.scala_Predef$.prototype.assume__Z__Lscala_Function0__ = (function(assumption, message$2) {
  return ScalaJS.bV(this.assume__Z__Lscala_Function0__V(assumption, message$2))
});
ScalaJS.c.scala_Predef$.prototype.assume__Z__ = (function(assumption$2) {
  return ScalaJS.bV(this.assume__Z__V(assumption$2))
});
ScalaJS.c.scala_Predef$.prototype.assert__Z__Lscala_Function0__ = (function(assertion, message$3) {
  return ScalaJS.bV(this.assert__Z__Lscala_Function0__V(assertion, message$3))
});
ScalaJS.c.scala_Predef$.prototype.assert__Z__ = (function(assertion$2) {
  return ScalaJS.bV(this.assert__Z__V(assertion$2))
});
ScalaJS.c.scala_Predef$.prototype.format__T__Lscala_collection_Seq__ = (function(text$3, xs$15) {
  return this.format__T__Lscala_collection_Seq__T(text$3, xs$15)
});
ScalaJS.c.scala_Predef$.prototype.exit__I__ = (function(status) {
  return this.exit__I__Lscala_Nothing(status)
});
ScalaJS.c.scala_Predef$.prototype.exit__ = (function() {
  return this.exit__Lscala_Nothing()
});
ScalaJS.c.scala_Predef$.prototype.error__T__ = (function(message$4) {
  return this.error__T__Lscala_Nothing(message$4)
});
ScalaJS.c.scala_Predef$.prototype.$$scope__ = (function() {
  return this.$$scope__Lscala_xml_TopScope$()
});
ScalaJS.c.scala_Predef$.prototype.locally__O__ = (function(x$54) {
  return this.locally__O__O(x$54)
});
ScalaJS.c.scala_Predef$.prototype.implicitly__O__ = (function(e) {
  return this.implicitly__O__O(e)
});
ScalaJS.c.scala_Predef$.prototype.identity__O__ = (function(x$55) {
  return this.identity__O__O(x$55)
});
ScalaJS.c.scala_Predef$.prototype.optManifest__Lscala_reflect_OptManifest__ = (function(m) {
  return this.optManifest__Lscala_reflect_OptManifest__Lscala_reflect_OptManifest(m)
});
ScalaJS.c.scala_Predef$.prototype.classManifest__Lscala_reflect_ClassTag__ = (function(m$2) {
  return this.classManifest__Lscala_reflect_ClassTag__Lscala_reflect_ClassTag(m$2)
});
ScalaJS.c.scala_Predef$.prototype.manifest__Lscala_reflect_Manifest__ = (function(m$3) {
  return this.manifest__Lscala_reflect_Manifest__Lscala_reflect_Manifest(m$3)
});
ScalaJS.c.scala_Predef$.prototype.NoManifest__ = (function() {
  return this.NoManifest__Lscala_reflect_NoManifest$()
});
ScalaJS.c.scala_Predef$.prototype.Manifest__ = (function() {
  return this.Manifest__Lscala_reflect_ManifestFactory$()
});
ScalaJS.c.scala_Predef$.prototype.ClassManifest__ = (function() {
  return this.ClassManifest__Lscala_reflect_ClassManifestFactory$()
});
ScalaJS.c.scala_Predef$.prototype.Set__ = (function() {
  return this.Set__Lscala_collection_immutable_Set$()
});
ScalaJS.c.scala_Predef$.prototype.Map__ = (function() {
  return this.Map__Lscala_collection_immutable_Map$()
});
ScalaJS.c.scala_Predef$.prototype.classOf__ = (function() {
  return this.classOf__Ljava_lang_Class()
});
/** @constructor */
ScalaJS.inheritable.scala_Predef$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Predef$.prototype = ScalaJS.c.scala_Predef$.prototype;
ScalaJS.is.scala_Predef$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Predef$)))
});
ScalaJS.as.scala_Predef$ = (function(obj) {
  if ((ScalaJS.is.scala_Predef$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Predef")
  }
});
ScalaJS.isArrayOf.scala_Predef$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Predef$)))
});
ScalaJS.asArrayOf.scala_Predef$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Predef$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Predef;", depth)
  }
});
ScalaJS.data.scala_Predef$ = new ScalaJS.ClassTypeData({
  scala_Predef$: 0
}, false, "scala.Predef$", ScalaJS.data.scala_LowPriorityImplicits, {
  scala_Predef$: 1,
  scala_LowPriorityImplicits: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Predef$.prototype.$classData = ScalaJS.data.scala_Predef$;
ScalaJS.moduleInstances.scala_Predef = undefined;
ScalaJS.modules.scala_Predef = (function() {
  if ((!ScalaJS.moduleInstances.scala_Predef)) {
    ScalaJS.moduleInstances.scala_Predef = new ScalaJS.c.scala_Predef$().init___()
  };
  return ScalaJS.moduleInstances.scala_Predef
});
//@ sourceMappingURL=Predef$.js.map
