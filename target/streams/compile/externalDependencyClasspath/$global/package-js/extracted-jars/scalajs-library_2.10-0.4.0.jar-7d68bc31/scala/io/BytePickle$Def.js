/** @constructor */
ScalaJS.c.scala_io_BytePickle$Def = (function() {
  ScalaJS.c.scala_io_BytePickle$RefDef.call(this)
});
ScalaJS.c.scala_io_BytePickle$Def.prototype = new ScalaJS.inheritable.scala_io_BytePickle$RefDef();
ScalaJS.c.scala_io_BytePickle$Def.prototype.constructor = ScalaJS.c.scala_io_BytePickle$Def;
ScalaJS.c.scala_io_BytePickle$Def.prototype.copy__Lscala_io_BytePickle$Def = (function() {
  return new ScalaJS.c.scala_io_BytePickle$Def().init___()
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.productPrefix__T = (function() {
  return "Def"
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_io_BytePickle$Def(x$1)
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.equals__O__Z = (function(x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_io_BytePickle$Def(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    return ScalaJS.as.scala_io_BytePickle$Def(x$1).canEqual__O__Z(this)
  } else {
    return false
  }
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.init___ = (function() {
  ScalaJS.c.scala_io_BytePickle$RefDef.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.copy__ = (function() {
  return this.copy__Lscala_io_BytePickle$Def()
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$Def = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$Def.prototype = ScalaJS.c.scala_io_BytePickle$Def.prototype;
ScalaJS.is.scala_io_BytePickle$Def = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$Def)))
});
ScalaJS.as.scala_io_BytePickle$Def = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$Def(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$Def")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$Def = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$Def)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$Def = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$Def(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$Def;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$Def = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$Def: 0
}, false, "scala.io.BytePickle$Def", ScalaJS.data.scala_io_BytePickle$RefDef, {
  scala_io_BytePickle$Def: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_io_BytePickle$RefDef: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$Def.prototype.$classData = ScalaJS.data.scala_io_BytePickle$Def;
//@ sourceMappingURL=BytePickle$Def.js.map
