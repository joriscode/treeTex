/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.underlying$2 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.underlying__Ljava_util_Enumeration = (function() {
  return this.underlying$2
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.hasNext__Z = (function() {
  return this.underlying__Ljava_util_Enumeration().hasMoreElements__Z()
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.next__O = (function() {
  return this.underlying__Ljava_util_Enumeration().nextElement__O()
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.copy__Ljava_util_Enumeration__Lscala_collection_convert_Wrappers$JEnumerationWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Enumeration(this.scala$collection$convert$Wrappers$JEnumerationWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.copy$default$1__Ljava_util_Enumeration = (function() {
  return this.underlying__Ljava_util_Enumeration()
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.productPrefix__T = (function() {
  return "JEnumerationWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Ljava_util_Enumeration();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_convert_Wrappers$JEnumerationWrapper(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_collection_convert_Wrappers$JEnumerationWrapper(x1) && (ScalaJS.as.scala_collection_convert_Wrappers$JEnumerationWrapper(x1).scala$collection$convert$Wrappers$JEnumerationWrapper$$$outer__Lscala_collection_convert_Wrappers() === this.scala$collection$convert$Wrappers$JEnumerationWrapper$$$outer__Lscala_collection_convert_Wrappers()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var JEnumerationWrapper$1 = ScalaJS.as.scala_collection_convert_Wrappers$JEnumerationWrapper(x$1);
      return (ScalaJS.anyRefEqEq(this.underlying__Ljava_util_Enumeration(), JEnumerationWrapper$1.underlying__Ljava_util_Enumeration()) && JEnumerationWrapper$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.scala$collection$convert$Wrappers$JEnumerationWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.init___Lscala_collection_convert_Wrappers__Ljava_util_Enumeration = (function($$outer, underlying) {
  this.underlying$2 = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.scala$collection$convert$Wrappers$JEnumerationWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$JEnumerationWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.copy__Ljava_util_Enumeration__ = (function(underlying) {
  return this.copy__Ljava_util_Enumeration__Lscala_collection_convert_Wrappers$JEnumerationWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.underlying__ = (function() {
  return this.underlying__Ljava_util_Enumeration()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JEnumerationWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JEnumerationWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JEnumerationWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JEnumerationWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JEnumerationWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JEnumerationWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JEnumerationWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JEnumerationWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JEnumerationWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JEnumerationWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JEnumerationWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JEnumerationWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JEnumerationWrapper: 0
}, false, "scala.collection.convert.Wrappers$JEnumerationWrapper", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_convert_Wrappers$JEnumerationWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JEnumerationWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JEnumerationWrapper;
//@ sourceMappingURL=Wrappers$JEnumerationWrapper.js.map
