/** @constructor */
ScalaJS.c.scala_io_BytePickle$$anon$3 = (function() {
  ScalaJS.c.scala_io_BytePickle$SPU.call(this);
  this.pa$1$2 = null
});
ScalaJS.c.scala_io_BytePickle$$anon$3.prototype = new ScalaJS.inheritable.scala_io_BytePickle$SPU();
ScalaJS.c.scala_io_BytePickle$$anon$3.prototype.constructor = ScalaJS.c.scala_io_BytePickle$$anon$3;
ScalaJS.c.scala_io_BytePickle$$anon$3.prototype.appP__O__Lscala_io_BytePickle$PicklerState__Lscala_io_BytePickle$PicklerState = (function(v, state) {
  var pe = state.dict__Lscala_io_BytePickle$PicklerEnv();
  var x1 = pe.get__O__Lscala_Option(v);
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    var sPrime = ScalaJS.modules.scala_io_BytePickle().refDef__Lscala_io_BytePickle$PU().appP__O__AB__AB(new ScalaJS.c.scala_io_BytePickle$Def().init___(), state.stream__AB());
    var l = pe.nextLoc__I();
    var sPrimePrime = this.pa$1$2.appP__O__Lscala_io_BytePickle$PicklerState__Lscala_io_BytePickle$PicklerState(v, new ScalaJS.c.scala_io_BytePickle$PicklerState().init___AB__Lscala_io_BytePickle$PicklerEnv(sPrime, pe));
    pe.update__O__O__V(v, ScalaJS.bI(l));
    return sPrimePrime
  };
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var l$2 = ScalaJS.uI(x2.x__O());
    var sPrime$2 = ScalaJS.modules.scala_io_BytePickle().refDef__Lscala_io_BytePickle$PU().appP__O__AB__AB(new ScalaJS.c.scala_io_BytePickle$Ref().init___(), state.stream__AB());
    return new ScalaJS.c.scala_io_BytePickle$PicklerState().init___AB__Lscala_io_BytePickle$PicklerEnv(ScalaJS.modules.scala_io_BytePickle().unat__Lscala_io_BytePickle$PU().appP__O__AB__AB(ScalaJS.bI(l$2), sPrime$2), pe)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_io_BytePickle$$anon$3.prototype.appU__Lscala_io_BytePickle$UnPicklerState__Lscala_Tuple2 = (function(state) {
  var upe = state.dict__Lscala_io_BytePickle$UnPicklerEnv();
  var res = ScalaJS.modules.scala_io_BytePickle().refDef__Lscala_io_BytePickle$PU().appU__AB__Lscala_Tuple2(state.stream__AB());
  var x1 = ScalaJS.as.scala_io_BytePickle$RefDef(res.$$und1__O());
  if (ScalaJS.is.scala_io_BytePickle$Def(x1)) {
    var l = upe.nextLoc__I();
    var res2 = this.pa$1$2.appU__Lscala_io_BytePickle$UnPicklerState__Lscala_Tuple2(new ScalaJS.c.scala_io_BytePickle$UnPicklerState().init___AB__Lscala_io_BytePickle$UnPicklerEnv(ScalaJS.asArrayOf.scala_Byte(res.$$und2__O(), 1), upe));
    upe.update__O__O__V(ScalaJS.bI(l), res2.$$und1__O());
    return res2
  };
  if (ScalaJS.is.scala_io_BytePickle$Ref(x1)) {
    var res2$2 = ScalaJS.modules.scala_io_BytePickle().unat__Lscala_io_BytePickle$PU().appU__AB__Lscala_Tuple2(ScalaJS.asArrayOf.scala_Byte(res.$$und2__O(), 1));
    var x1$2 = upe.get__O__Lscala_Option(ScalaJS.bI(res2$2.$$und1$mcI$sp__I()));
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1$2)) {
      throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("invalid unpickler environment")
    };
    if (ScalaJS.is.scala_Some(x1$2)) {
      var x2 = ScalaJS.as.scala_Some(x1$2);
      var v = x2.x__O();
      return new ScalaJS.c.scala_Tuple2().init___O__O(v, new ScalaJS.c.scala_io_BytePickle$UnPicklerState().init___AB__Lscala_io_BytePickle$UnPicklerEnv(ScalaJS.asArrayOf.scala_Byte(res2$2.$$und2__O(), 1), upe))
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_io_BytePickle$$anon$3.prototype.init___Lscala_io_BytePickle$SPU = (function(pa$1) {
  this.pa$1$2 = pa$1;
  ScalaJS.c.scala_io_BytePickle$SPU.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$$anon$3.prototype = ScalaJS.c.scala_io_BytePickle$$anon$3.prototype;
ScalaJS.is.scala_io_BytePickle$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$$anon$3)))
});
ScalaJS.as.scala_io_BytePickle$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$$anon$3)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$$anon$3;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$$anon$3 = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$$anon$3: 0
}, false, "scala.io.BytePickle$$anon$3", ScalaJS.data.scala_io_BytePickle$SPU, {
  scala_io_BytePickle$$anon$3: 1,
  scala_io_BytePickle$SPU: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$$anon$3.prototype.$classData = ScalaJS.data.scala_io_BytePickle$$anon$3;
//@ sourceMappingURL=BytePickle$$anon$3.js.map
