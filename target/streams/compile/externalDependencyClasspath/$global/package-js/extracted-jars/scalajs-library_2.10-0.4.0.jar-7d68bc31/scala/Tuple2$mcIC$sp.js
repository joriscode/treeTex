/** @constructor */
ScalaJS.c.scala_Tuple2$mcIC$sp = (function() {
  ScalaJS.c.scala_Tuple2.call(this);
  this.$$und1$mcI$sp$f = 0;
  this.$$und2$mcC$sp$f = 0
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype = new ScalaJS.inheritable.scala_Tuple2();
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.constructor = ScalaJS.c.scala_Tuple2$mcIC$sp;
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.$$und1$mcI$sp__I = (function() {
  return this.$$und1$mcI$sp$f
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.$$und1__I = (function() {
  return this.$$und1$mcI$sp__I()
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.$$und2$mcC$sp__C = (function() {
  return this.$$und2$mcC$sp$f
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.$$und2__C = (function() {
  return this.$$und2$mcC$sp__C()
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.swap__Lscala_Tuple2 = (function() {
  return this.swap$mcIC$sp__Lscala_Tuple2()
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.swap$mcIC$sp__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2$mcCI$sp().init___C__I(this.$$und2__C(), this.$$und1__I())
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.copy$default$1__I = (function() {
  return this.copy$default$1$mcI$sp__I()
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.copy$default$1$mcI$sp__I = (function() {
  return this.$$und1__I()
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.copy$default$2__C = (function() {
  return this.copy$default$2$mcC$sp__C()
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.copy$default$2$mcC$sp__C = (function() {
  return this.$$und2__C()
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.specInstance$__Z = (function() {
  return true
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.copy$default$2__O = (function() {
  return ScalaJS.bC(this.copy$default$2__C())
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.copy$default$1__O = (function() {
  return ScalaJS.bI(this.copy$default$1__I())
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.$$und2__O = (function() {
  return ScalaJS.bC(this.$$und2__C())
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.$$und1__O = (function() {
  return ScalaJS.bI(this.$$und1__I())
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.init___I__C = (function(_1$mcI$sp, _2$mcC$sp) {
  this.$$und1$mcI$sp$f = _1$mcI$sp;
  this.$$und2$mcC$sp$f = _2$mcC$sp;
  ScalaJS.c.scala_Tuple2.prototype.init___O__O.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_Tuple2$mcIC$sp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Tuple2$mcIC$sp.prototype = ScalaJS.c.scala_Tuple2$mcIC$sp.prototype;
ScalaJS.is.scala_Tuple2$mcIC$sp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Tuple2$mcIC$sp)))
});
ScalaJS.as.scala_Tuple2$mcIC$sp = (function(obj) {
  if ((ScalaJS.is.scala_Tuple2$mcIC$sp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Tuple2$mcIC$sp")
  }
});
ScalaJS.isArrayOf.scala_Tuple2$mcIC$sp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Tuple2$mcIC$sp)))
});
ScalaJS.asArrayOf.scala_Tuple2$mcIC$sp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Tuple2$mcIC$sp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Tuple2$mcIC$sp;", depth)
  }
});
ScalaJS.data.scala_Tuple2$mcIC$sp = new ScalaJS.ClassTypeData({
  scala_Tuple2$mcIC$sp: 0
}, false, "scala.Tuple2$mcIC$sp", ScalaJS.data.scala_Tuple2, {
  scala_Tuple2$mcIC$sp: 1,
  scala_Tuple2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product2: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Tuple2$mcIC$sp.prototype.$classData = ScalaJS.data.scala_Tuple2$mcIC$sp;
//@ sourceMappingURL=Tuple2$mcIC$sp.js.map
