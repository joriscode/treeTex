/** @constructor */
ScalaJS.c.scala_io_BytePickle$Ref = (function() {
  ScalaJS.c.scala_io_BytePickle$RefDef.call(this)
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype = new ScalaJS.inheritable.scala_io_BytePickle$RefDef();
ScalaJS.c.scala_io_BytePickle$Ref.prototype.constructor = ScalaJS.c.scala_io_BytePickle$Ref;
ScalaJS.c.scala_io_BytePickle$Ref.prototype.copy__Lscala_io_BytePickle$Ref = (function() {
  return new ScalaJS.c.scala_io_BytePickle$Ref().init___()
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.productPrefix__T = (function() {
  return "Ref"
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_io_BytePickle$Ref(x$1)
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.equals__O__Z = (function(x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_io_BytePickle$Ref(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    return ScalaJS.as.scala_io_BytePickle$Ref(x$1).canEqual__O__Z(this)
  } else {
    return false
  }
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.init___ = (function() {
  ScalaJS.c.scala_io_BytePickle$RefDef.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.copy__ = (function() {
  return this.copy__Lscala_io_BytePickle$Ref()
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$Ref = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$Ref.prototype = ScalaJS.c.scala_io_BytePickle$Ref.prototype;
ScalaJS.is.scala_io_BytePickle$Ref = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$Ref)))
});
ScalaJS.as.scala_io_BytePickle$Ref = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$Ref(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$Ref")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$Ref = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$Ref)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$Ref = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$Ref(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$Ref;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$Ref = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$Ref: 0
}, false, "scala.io.BytePickle$Ref", ScalaJS.data.scala_io_BytePickle$RefDef, {
  scala_io_BytePickle$Ref: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_io_BytePickle$RefDef: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$Ref.prototype.$classData = ScalaJS.data.scala_io_BytePickle$Ref;
//@ sourceMappingURL=BytePickle$Ref.js.map
