/** @constructor */
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.old$1 = null;
  this.expectedmain$1 = null;
  this.nv$1 = null;
  this.committed$1 = false
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.constructor = ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor;
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.old__Lscala_collection_concurrent_INode = (function() {
  return this.old$1
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.expectedmain__Lscala_collection_concurrent_MainNode = (function() {
  return this.expectedmain$1
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.nv__Lscala_collection_concurrent_INode = (function() {
  return this.nv$1
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.committed__Z = (function() {
  return this.committed$1
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.committed$und$eq__Z__V = (function(x$1) {
  this.committed$1 = x$1
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.copy__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_RDCSS$undDescriptor = (function(old, expectedmain, nv) {
  return new ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor().init___Lscala_collection_concurrent_INode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode(old, expectedmain, nv)
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.copy$default$1__Lscala_collection_concurrent_INode = (function() {
  return this.old__Lscala_collection_concurrent_INode()
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.copy$default$2__Lscala_collection_concurrent_MainNode = (function() {
  return this.expectedmain__Lscala_collection_concurrent_MainNode()
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.copy$default$3__Lscala_collection_concurrent_INode = (function() {
  return this.nv__Lscala_collection_concurrent_INode()
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.productPrefix__T = (function() {
  return "RDCSS_Descriptor"
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.productArity__I = (function() {
  return 3
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.old__Lscala_collection_concurrent_INode();
        break
      };
    case 1:
      {
        return this.expectedmain__Lscala_collection_concurrent_MainNode();
        break
      };
    case 2:
      {
        return this.nv__Lscala_collection_concurrent_INode();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_concurrent_RDCSS$undDescriptor(x$1)
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_collection_concurrent_RDCSS$undDescriptor(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var RDCSS_Descriptor$1 = ScalaJS.as.scala_collection_concurrent_RDCSS$undDescriptor(x$1);
      return (((ScalaJS.anyRefEqEq(this.old__Lscala_collection_concurrent_INode(), RDCSS_Descriptor$1.old__Lscala_collection_concurrent_INode()) && ScalaJS.anyRefEqEq(this.expectedmain__Lscala_collection_concurrent_MainNode(), RDCSS_Descriptor$1.expectedmain__Lscala_collection_concurrent_MainNode())) && ScalaJS.anyRefEqEq(this.nv__Lscala_collection_concurrent_INode(), RDCSS_Descriptor$1.nv__Lscala_collection_concurrent_INode())) && RDCSS_Descriptor$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.init___Lscala_collection_concurrent_INode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode = (function(old, expectedmain, nv) {
  this.old$1 = old;
  this.expectedmain$1 = expectedmain;
  this.nv$1 = nv;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  this.committed$1 = false;
  return this
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.copy__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode__ = (function(old, expectedmain, nv) {
  return this.copy__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_MainNode__Lscala_collection_concurrent_INode__Lscala_collection_concurrent_RDCSS$undDescriptor(old, expectedmain, nv)
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.committed$und$eq__Z__ = (function(x$1$3) {
  return ScalaJS.bV(this.committed$und$eq__Z__V(x$1$3))
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.committed__ = (function() {
  return ScalaJS.bZ(this.committed__Z())
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.nv__ = (function() {
  return this.nv__Lscala_collection_concurrent_INode()
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.expectedmain__ = (function() {
  return this.expectedmain__Lscala_collection_concurrent_MainNode()
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.old__ = (function() {
  return this.old__Lscala_collection_concurrent_INode()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_RDCSS$undDescriptor = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_RDCSS$undDescriptor.prototype = ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype;
ScalaJS.is.scala_collection_concurrent_RDCSS$undDescriptor = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_RDCSS$undDescriptor)))
});
ScalaJS.as.scala_collection_concurrent_RDCSS$undDescriptor = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_RDCSS$undDescriptor(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.RDCSS_Descriptor")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_RDCSS$undDescriptor = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_RDCSS$undDescriptor)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_RDCSS$undDescriptor = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_RDCSS$undDescriptor(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.RDCSS_Descriptor;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_RDCSS$undDescriptor = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_RDCSS$undDescriptor: 0
}, false, "scala.collection.concurrent.RDCSS_Descriptor", ScalaJS.data.java_lang_Object, {
  scala_collection_concurrent_RDCSS$undDescriptor: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_RDCSS$undDescriptor.prototype.$classData = ScalaJS.data.scala_collection_concurrent_RDCSS$undDescriptor;
//@ sourceMappingURL=RDCSS_Descriptor.js.map
