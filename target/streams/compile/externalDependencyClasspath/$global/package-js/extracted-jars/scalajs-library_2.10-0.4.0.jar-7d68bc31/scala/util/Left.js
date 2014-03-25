/** @constructor */
ScalaJS.c.scala_util_Left = (function() {
  ScalaJS.c.scala_util_Either.call(this);
  this.a$2 = null
});
ScalaJS.c.scala_util_Left.prototype = new ScalaJS.inheritable.scala_util_Either();
ScalaJS.c.scala_util_Left.prototype.constructor = ScalaJS.c.scala_util_Left;
ScalaJS.c.scala_util_Left.prototype.a__O = (function() {
  return this.a$2
});
ScalaJS.c.scala_util_Left.prototype.isLeft__Z = (function() {
  return true
});
ScalaJS.c.scala_util_Left.prototype.isRight__Z = (function() {
  return false
});
ScalaJS.c.scala_util_Left.prototype.copy__O__Lscala_util_Left = (function(a) {
  return new ScalaJS.c.scala_util_Left().init___O(a)
});
ScalaJS.c.scala_util_Left.prototype.copy$default$1__O = (function() {
  return this.a__O()
});
ScalaJS.c.scala_util_Left.prototype.productPrefix__T = (function() {
  return "Left"
});
ScalaJS.c.scala_util_Left.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_util_Left.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.a__O();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_util_Left.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_Left.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_Left(x$1)
});
ScalaJS.c.scala_util_Left.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_util_Left.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_Left.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_util_Left(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Left$1 = ScalaJS.as.scala_util_Left(x$1);
      return ScalaJS.anyEqEq(this.a__O(), Left$1.a__O())
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_Left.prototype.init___O = (function(a) {
  this.a$2 = a;
  ScalaJS.c.scala_util_Either.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_Left.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_Left.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_Left.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_Left.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_Left.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_Left.prototype.copy__O__ = (function(a) {
  return this.copy__O__Lscala_util_Left(a)
});
ScalaJS.c.scala_util_Left.prototype.a__ = (function() {
  return this.a__O()
});
/** @constructor */
ScalaJS.inheritable.scala_util_Left = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Left.prototype = ScalaJS.c.scala_util_Left.prototype;
ScalaJS.is.scala_util_Left = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Left)))
});
ScalaJS.as.scala_util_Left = (function(obj) {
  if ((ScalaJS.is.scala_util_Left(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Left")
  }
});
ScalaJS.isArrayOf.scala_util_Left = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Left)))
});
ScalaJS.asArrayOf.scala_util_Left = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Left(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Left;", depth)
  }
});
ScalaJS.data.scala_util_Left = new ScalaJS.ClassTypeData({
  scala_util_Left: 0
}, false, "scala.util.Left", ScalaJS.data.scala_util_Either, {
  scala_util_Left: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_Either: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Left.prototype.$classData = ScalaJS.data.scala_util_Left;
//@ sourceMappingURL=Left.js.map
