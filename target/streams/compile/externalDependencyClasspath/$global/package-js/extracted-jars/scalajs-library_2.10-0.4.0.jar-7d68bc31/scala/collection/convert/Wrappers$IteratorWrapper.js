/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.underlying$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.underlying__Lscala_collection_Iterator = (function() {
  return this.underlying$1
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.hasNext__Z = (function() {
  return this.underlying__Lscala_collection_Iterator().hasNext__Z()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.next__O = (function() {
  return this.underlying__Lscala_collection_Iterator().next__O()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.hasMoreElements__Z = (function() {
  return this.underlying__Lscala_collection_Iterator().hasNext__Z()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.nextElement__O = (function() {
  return this.underlying__Lscala_collection_Iterator().next__O()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.remove__Lscala_Nothing = (function() {
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.copy__Lscala_collection_Iterator__Lscala_collection_convert_Wrappers$IteratorWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_Iterator(this.scala$collection$convert$Wrappers$IteratorWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.copy$default$1__Lscala_collection_Iterator = (function() {
  return this.underlying__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.productPrefix__T = (function() {
  return "IteratorWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Lscala_collection_Iterator();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_convert_Wrappers$IteratorWrapper(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_collection_convert_Wrappers$IteratorWrapper(x1) && (ScalaJS.as.scala_collection_convert_Wrappers$IteratorWrapper(x1).scala$collection$convert$Wrappers$IteratorWrapper$$$outer__Lscala_collection_convert_Wrappers() === this.scala$collection$convert$Wrappers$IteratorWrapper$$$outer__Lscala_collection_convert_Wrappers()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var IteratorWrapper$1 = ScalaJS.as.scala_collection_convert_Wrappers$IteratorWrapper(x$1);
      return (ScalaJS.anyRefEqEq(this.underlying__Lscala_collection_Iterator(), IteratorWrapper$1.underlying__Lscala_collection_Iterator()) && IteratorWrapper$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.scala$collection$convert$Wrappers$IteratorWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.remove__V = (function() {
  this.remove__Lscala_Nothing()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_Iterator = (function($$outer, underlying) {
  this.underlying$1 = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.scala$collection$convert$Wrappers$IteratorWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$IteratorWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.copy__Lscala_collection_Iterator__ = (function(underlying) {
  return this.copy__Lscala_collection_Iterator__Lscala_collection_convert_Wrappers$IteratorWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.remove__ = (function() {
  return this.remove__Lscala_Nothing()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.nextElement__ = (function() {
  return this.nextElement__O()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.hasMoreElements__ = (function() {
  return ScalaJS.bZ(this.hasMoreElements__Z())
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.next__ = (function() {
  return this.next__O()
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.hasNext__ = (function() {
  return ScalaJS.bZ(this.hasNext__Z())
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.underlying__ = (function() {
  return this.underlying__Lscala_collection_Iterator()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$IteratorWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$IteratorWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$IteratorWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$IteratorWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$IteratorWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$IteratorWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$IteratorWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$IteratorWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$IteratorWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$IteratorWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$IteratorWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$IteratorWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$IteratorWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$IteratorWrapper: 0
}, false, "scala.collection.convert.Wrappers$IteratorWrapper", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Wrappers$IteratorWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_util_Enumeration: 1,
  java_util_Iterator: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$IteratorWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$IteratorWrapper;
//@ sourceMappingURL=Wrappers$IteratorWrapper.js.map
